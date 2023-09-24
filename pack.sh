name=${PWD##*/}

rm -rf .packed-files
rm "$name.zip"

mkdir .packed-files
mkdir .packed-files/build
cp build/bundle.js .packed-files/build/
cp ./manifest.json .packed-files
zip -r "$name.zip" .packed-files
