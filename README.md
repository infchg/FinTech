# FinTech

demos on FinTech integrations, leveraging API, yaml, ... see also [https://github.com/infchg/docs-md] reporting 

## RPA

see jupyter rpa notes as needed to collect information from non-API apps

## HACT

Plans to include here works on Harmonized approach to cash transfers (HACT)


 UNFPA UNDP UNICEF use HACT to transfer cash to partners, via the Resident Coordinator, the framework can be tailored to different environments.

## SAP

- need cds first,
- then run the JavaScript implementation: in a terminal run 

    cds watch
    
    
 - Then call the service at: http://localhost:4004/say/hello(to='world')


### commands to reinstall the daemon:

    System V init distributions: /opt/sap/scc/daemon.sh reinstall
    systemd distributions: /opt/sap/scc/daemon.sh reinstallSystemd

## PRevious Demos disc-rb


[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/infchg/FinTech)

[![Build Status](https://travis-ci.org/infchg/FinTech.svg?branch=master)](https://travis-ci.org/infchg/FinTech)


## how  created this repo 

```
echo "# disc-rb" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/infchg/disc-rb.git
git push -u origin main
```

