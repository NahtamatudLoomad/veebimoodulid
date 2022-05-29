echo "${{secrets.SSH_KEY}}" > deploy_key
chmod 600 ./deploy_key
rsync -rave "ssh -i ./deploy_key" --exclude '.github' --exclude '.git' --delete ./* doggo@165.227.163.13:/srv/web/cdn