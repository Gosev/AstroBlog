#yarn build

export S3_BUCKET='kodaps.dev'

cd ./dist

aws s3 cp . s3://${S3_BUCKET}/ --recursive --profile=ecotree --exclude="*.html" --exclude=".git/*" --acl public-read --profile=ecotree --acl=public-read --cache-control max-age=7776000,public
aws s3 cp . s3://${S3_BUCKET}/ --recursive --profile=ecotree --exclude "*" --include="*.html" --acl public-read --profile=ecotree --acl=public-read --cache-control max-age=600,public


cd ..