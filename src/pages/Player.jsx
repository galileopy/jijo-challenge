import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Container,
  Card,
  CardActions,
  IconButton,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import noimage from '../images/default.jpg'

import { PlayMusic, SkipMusic, StopMusic } from '../redux/actions'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  rootSM: {
    maxWidth: 345,
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cover: {
    width: 151,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}))

const Player = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const classes = useStyles()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const onPlay = useCallback(() => dispatch(PlayMusic()), [dispatch])
  const onStop = useCallback(() => dispatch(StopMusic()), [dispatch])
  const onSkip = useCallback(() => dispatch(SkipMusic()), [dispatch])
  const { artist, track, image, album } = useSelector(
    (state) => state.feedFM.current,
  )

  const { playing } = useSelector((state) => state.feedFM)
  return (
    <Container>
      <Card className={sm ? classes.root : classes.rootSm}>
        <CardMedia
          className={sm ? classes.cover : classes.media}
          image={image || noimage}
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {track}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {album}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {artist}
          </Typography>
        </CardContent>
        <CardActions className={classes.controls}>
          {playing ? (
            <IconButton onClick={onStop} aria-label="play/pause">
              <PauseIcon className={classes.playIcon} />
            </IconButton>
          ) : (
            <IconButton onClick={onPlay} aria-label="play/pause">
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          )}
          <IconButton onClick={onSkip} aria-label="next">
            <SkipNextIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Player
