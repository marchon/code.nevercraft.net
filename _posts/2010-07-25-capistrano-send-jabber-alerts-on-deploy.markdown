---
layout: post
title: "Capistrano: Send Jabber alerts on deploy"
date: Sun Jul 25 23:18:14 EDT 2010
categories:
  - Development
  - Rails
---

I use this Capistrano recipe at work to send a broadcast to the
office when I deploy an update. We use Jabber, and have a broadcast
user that forwards messages to every user.

<script src="http://gist.github.com/490141.js?file=jabber.rb"> </script>

Copy `jabber.yml` to `config/jabber.yml`. Edit the details in it:

    username: The Jabber account that will be **SENDING** alerts
              to the broadcast account

    password: The password for the above Jabber account

    broadcast: The Jabber broadcast account configured to forward
               messages to all users

Drop `jabber.rb` to `config/deploy/jabber.rb`. Add
`load "config/deploy/jabber.rb"` to `config/deploy.rb`.

When you deploy and Capistrano hits the `web:disable`
and `web:enable` tasks, a message will be sent to your
users indicating the system is down. You can customize this
message like so:

    JABBER_REASON='a database migration' JABBER_DOWNTIME='10 minutes' cap deploy
    JABBER_REASON='everything is broken' JABBER_DOWNTIME='a long time' cap deploy:web:disable


