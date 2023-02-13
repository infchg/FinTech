# FinTech

demos on FinTech integrations, leveraging API, yaml, ... see also [https://github.com/infchg/docs-md] reporting 

## Agile PMI Prince ...

Align with Prince2 to Agile using these CC-BY @infChg icons & colors ( > 🌐🌏SafeComm > 🌡❌Assess >💡✋Engage > ✅🍀Serve > )

PRINCE2 principles are:

-   Continued business justification🍀
-   Learn from experience🌡 ❌
-   Defined roles and responsibilities🌐
-   Manage by stages 🌡
-   Manage by exception✋
-   Focus on products🍀
-   Tailor to suit the project.🍀

Prince2 Theme	|	question	|	cjAgile
---|---|---
Business case	|	Why?	|	x%
Organization	|	Who?	|	!
Quality	|	What?	|	/
Plans	|	How? How much? What?	|	()=
Risk	|	What if?	|	x%
Change	|	What is the impact?	|	/
Progress	|	Where are we now? Where are we going? Should we carry on?	|	!


PMP	|	PRINCE2
---|---
Project sponsor	|	Executive
Business case	|	Business case
Project charter	|	Project brief
Project management plan	|	Project initiation documentation
Phase	|	Stage
Project Scope Statement	|	Project Product Description
WBS	|	PBS
WBS dictionary	|	Product Description
Change Log	|	Issue Register
Issue Log	|	Issue Register
No clear analogue	|	Team manager
Project Closure Documents	|	End Project Report
Performance Report	|	Highlight Report, Checkpoint Report, End Stage Reports

The PRINCE2 processes are:

-   Starting up a project
-   Directing a project🌐 ✅
-   Initiating a project❌
-   Controlling a project💡✋
-   Managing project delivery ✅
-   Managing a stage boundary❌
-   Closing a project.

Agile Manifesto value statements:

-   Individuals and interactions over processes and tools✋💡
-   Working software over comprehensive documentation🍀
-   Customer collaboration over contract negotiation🌐
-   Responding to change over following a plan. ❌



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

