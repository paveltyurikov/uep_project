#!/usr/bin/env bash

read -p 'npm build?: ' COMMIT_MESSAGE
if [ -n "${COMMIT_MESSAGE}" ]; then
    npm run build --prefix frontend &&
    echo "Копирую frontend/build/index.html в apps/templates/index.htm"
    cp frontend/build/index.html apps/templates/index.html
fi

echo "Запускаю плейбук"
ansible-playbook -i "~/playbooks/inventory/work.inv" ./utility/ansible/front.yaml --ask-become-pass