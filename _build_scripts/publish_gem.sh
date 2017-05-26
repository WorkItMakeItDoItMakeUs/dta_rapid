#! /bin/bash

# echo current version
ascertain_version() {
	#version=`gem specification dta_rapid version | awk 'match($0, /version(.*)/) { print substr( $2, RSTART, RLENGTH )}'`
	version=`cat dta_rapid.gemspec | sed -n 's/.*version.*"\(.*\)"/\1/p'`
	IFS='.' read -r -a version_array <<< "$version"

	major_version=${version_array[0]}
	minor_version=${version_array[1]}
	patch_version=${version_array[2]}
}

check_local_changes() {
  if [[ `git status --porcelain` ]]; then
    echo "Local changes found, please commit or clear before proceeding"
    exit 1
  fi
}

check_remote_version() {
  remote_version=`gem query -r dta_rapid | sed -n 's/.*dta_rapid.*(\(.*\))/\1/p'`

  echo
  echo '   Current gem version: ' $version
  echo 'Current remote version: ' $remote_version

  if [[ $remote_version != $version ]]; then
    echo "Your current local version seems to be behind the latest remote"
    echo "Please update before continuing"
    exit 1
  fi
}

show_menu() {
  echo
  echo Publish new version of gem
  echo ==========================
  echo
  echo "  1. Release new Major version (1.x.x > 2.x.x)"
  echo "  2. Release new Minor version (x.1.x > x.2.x)"
  echo "  3. Release new Patch version (x.x.1 > x.x.2)"
  echo
  echo "  CTRL+C: Quit"
  echo
  read -p "Please select an option: " REPLY </dev/tty
}

handle_option() {
  case "$1" in
    major|1)
      ((major_version++))
      new_version="${major_version}.${minor_version}.${patch_version}"
      release_new_version $new_version
      ;;
    minor|2)
      ((minor_version++))
      new_version="${major_version}.${minor_version}.${patch_version}"
      release_new_version $new_version
      ;;
    patch|3)
      ((patch_version++))
      new_version="${major_version}.${minor_version}.${patch_version}"
      release_new_version $new_version
      ;;
    *)
      echo Invalid Option!
      echo "Available options are: <major/minor/patch>"
      exit 1
  esac
}

release_commands() {
  `sed -i '' "s/\(.*version.*\)\"\(.*\)\"/\1\"${1}\"/g" dta_rapid.gemspec`
  git commit -am "Update gem version to ${1}"
  git pull --rebase
  git push
  gem build dta_rapid.gemspec
  gem push dta_rapid-$1.gem
  echo
  echo 'Finito!'
}

release_new_version() {
  echo
  echo "Current version: ${version}"
  echo "    New version: ${1}"
  echo
  read -p "Do you wish to proceed? (Y/n): " CONF_REPLY </dev/tty

  case "$CONF_REPLY" in
    Y)
      echo "New release immanent for version: ${1}"
      release_commands $1
      ;;
    n)
      echo "Back away not today, disco lady"
      exit 1
      ;;
  esac
}

check_local_changes
ascertain_version
check_remote_version
show_menu
handle_option $REPLY
