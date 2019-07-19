#!/usr/bin/env bash
IP_ADDRESS=$(ipconfig getifaddr en0)
echo "Твой IP адрес: " $IP_ADDRESS
python ./manage.py runserver localhost:9000