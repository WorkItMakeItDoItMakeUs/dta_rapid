#! /bin/bash

# echo current version
version=`gem specification dta_rapid version | awk 'match($0, /version(.*)/) { print substr( $2, RSTART, RLENGTH )}'`
IFS='.' read -r -a version_array <<< "$version"

patch_version=${version_array[0]}
minor_version=${version_array[1]}
major_version=${version_array[2]}

echo $patch_version
echo $minor_version
echo $major_version

#commit update to gemspec
#gem build dta_rapid.gemspec
#gem push dta_rapid-$VERSION.gem
