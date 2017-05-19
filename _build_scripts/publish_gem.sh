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

release_new_version() {
  echo "Releasing new version: ${1}"
  #`sed -i '' "s/\(.*version.*\)\"\(.*\)\"/\1\"${1}\"/g" dta_rapid.gemspec`
  #`git commit -am "Update patch version"`
  #`git pull --rebase`
  #`git push`
  #`gem build dta_rapid.gemspec`
  #`gem push dta_rapid-$1.gem`
}

ascertain_version
show_menu
handle_option $REPLY
