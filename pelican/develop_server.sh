#!/usr/bin/env bash
##
# This section should match your Makefile
##
PY=${PY:-python3}
PELICAN=${PELICAN:-pelican}
PELICANOPTS=

BASEDIR=$(pwd)
INPUTDIR=$BASEDIR/content
OUTPUTDIR=$BASEDIR/output
CONFFILE=$BASEDIR/pelicanconf.py
PUBLISHCONF=$BASEDIR/publishconf.py

###
# Don't change stuff below here unless you are sure
###

SRV_PID=$BASEDIR/srv.pid
PELICAN_PID=$BASEDIR/pelican.pid

function usage(){
  echo "usage: $0 (stop) (start) (restart) [port] [publish_flag=dev]"
  echo "This starts Pelican in debug and reload mode and then launches"
  echo "an HTTP server to help site development. It doesn't read"
  echo "your Pelican settings, so if you edit any paths in your Makefile"
  echo "you will need to edit your settings as well."
  exit 3
}

function alive() {
  kill -0 $1 >/dev/null 2>&1
}

function shut_down(){
  PID=$(cat $SRV_PID)
  if [[ $? -eq 0 ]]; then
    if alive $PID; then
      echo "Stopping HTTP server"
      kill $PID
    else
      echo "Stale PID, deleting"
    fi
    rm $SRV_PID
  else
    echo "HTTP server PIDFile not found"
  fi

  PID=$(cat $PELICAN_PID)
  if [[ $? -eq 0 ]]; then
    if alive $PID; then
      echo "Killing Pelican"
      kill $PID
    else
      echo "Stale PID, deleting"
    fi
    rm $PELICAN_PID
  else
    echo "Pelican PIDFile not found"
  fi
}

function start_up(){
  local port=$1
  local publish_opts=$PUBLISHCONF
  echo "Starting up Pelican and HTTP server"
  shift
  if [[ $2 -eq "dev" ]]; then opts=$CONFFILE; fi
  $PELICAN --debug --autoreload -r $INPUTDIR -o $OUTPUTDIR -s $publish_opts $PELICANOPTS &
  pelican_pid=$!
  echo $pelican_pid > $PELICAN_PID
  mkdir -p $OUTPUTDIR && cd $OUTPUTDIR
  $PY -m pelican.server $port &
  srv_pid=$!
  echo $srv_pid > $SRV_PID
  cd $BASEDIR
  sleep 1
  if ! alive $pelican_pid ; then
    echo "Pelican didn't start. Is the Pelican package installed?"
    return 1
  elif ! alive $srv_pid ; then
    echo "The HTTP server didn't start. Is there another service using port" $port "?"
    return 1
  fi
  echo 'Pelican and HTTP server processes now running in background.'
}

###
#  MAIN
###
[[ ($# -eq 0) || ($# -gt 3) ]] && usage
port=''
publish_flag=''
[[ $# -eq 2 ]] && port=$2
[[ $# -eq 3 ]] && port=$2 && publish_flag=$3

if [[ $1 == "stop" ]]; then
  shut_down
elif [[ $1 == "restart" ]]; then
  shut_down
  start_up $port $publish_flag
elif [[ $1 == "start" ]]; then
  if ! start_up $port $publish_flag; then
    shut_down
  fi
else
  usage
fi