# Containerize and Deploy

Here I have dockerized a simple node service, and deployed on a worker node.
Project <a href="https://roadmap.sh/projects/dockerized-service-deployment">link</a>.

### What is happening?

    1 - on commits to branch main, I containerize my service
    ... using Ansible I deploy my app:
    2 - Down previous app
    2 - After building image I directly push it to the worker node (didn't want to involve docker register at this point)
    3 - Run new image

### Tools

**Github Action** to implement my CI/CD <br>
**Ansible** to automate deploy process, also used inside CI/CD pipeline
