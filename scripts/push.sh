yarn build

export S3_BUCKET='kodaps.dev'

cd ./dist

aws s3 cp . s3://${S3_BUCKET}/ --recursive --exclude="*.html" --exclude=".git/*"  --cache-control max-age=7776000,public
aws s3 cp . s3://${S3_BUCKET}/ --recursive --exclude "*" --include="*.html" --cache-control max-age=600,public


cd ..