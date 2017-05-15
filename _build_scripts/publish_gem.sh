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

show_menu() {
  echo 'Current gem version: ' $version
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
      echo 'new Major'
      ;;
    minor|2)
      echo 'new Minor'
      ;;
    patch|3)
      echo 'Releasing new Patch version'
      
      ;;
    *)
      echo Invalid Option!
      echo "Available options are: <major/minor/patch>"
      exit 1
  esac
}

ascertain_version
show_menu
handle_option $REPLY

#commit update to gemspec
#gem build dta_rapid.gemspec
#gem push dta_rapid-$VERSION.gem
