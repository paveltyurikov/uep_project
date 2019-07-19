#!/usr/bin/env bash
read -p 'Commit message: ' COMMIT_MESSAGE
if [ -n "${COMMIT_MESSAGE}" ]; then
    git add . &&
    git commit -m "$COMMIT_MESSAGE" &&
    git push origin master
fi

ansible-playbook -i "~/playbooks/inventory/work.inv" ./utility/ansible/update.yaml --ask-become-pass