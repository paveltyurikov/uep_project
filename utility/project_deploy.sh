#!/usr/bin/env bash
ansible-playbook -i "~/playbooks/inventory/work.inv" ./utility/ansible/deploy.yaml --ask-become-pass