Docker tutorial - apna college 
https://youtu.be/exmSJpJvIPs 






github-repo
…or create a new repository on the command line
echo "# docker-test-app-2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Abhijayshah/docker-test-app-2.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Abhijayshah/docker-test-app-2.git
git branch -M main
git push -u origin main








Docker










Class – object 
Image – container 






Docker -image 
 Executable files 






- container
Portable 
light weight








Example - 
Macbook -ke ander  (ubuntu run karenge - complete setup   )






To Verify – run the command 
Docker































 docker pull ubuntu  












































































































Difference – Ubuntu vs Docker 
🧠 5. Docker vs Virtual Machine




4
Docker:
Lightweight
Fast
Shares OS kernel
VM:
Heavy (GBs)
Slow
Full OS























docker --version
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker --version
Docker version 29.2.1, build a5c7197
(base) abhijayhome@Abhijays-MacBook-Air ~ % ls
ai_completion			Documents			nltk_data
anaconda_projects		Downloads			OneDrive
AndroidStudioProjects		fastmcp-env			Pictures
anydesk				Google Drive			Public
Applications			iCloud Drive (Archive)		Python
automation_script-1.py.save	Library				trai
automation_script.py		MEGA_2				Untitled.ipynb
automation_script.py.save	mongodb-macos-aarch64-8.0.12	Untitled1.ipynb
data				Movies				Videos
Desktop				Music
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker pull hello-world                    
Using default tag: latest
latest: Pulling from library/hello-world
198f93fd5094: Pull complete 
95ce02e4a4f1: Download complete 
Digest: sha256:85404b3c53951c3ff5d40de0972b1bb21fafa2e8daa235355baf44f33db9dbdd
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                         i Info →   U  In Use
IMAGE                             ID             DISK USAGE   CONTENT SIZE   EXTRA
docker/welcome-to-docker:latest   c4d56c24da4f       22.9MB         6.35MB    U   
hello-world:latest                85404b3c5395       22.5kB         10.2kB        
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run hello-world
Hello from Docker!
This message shows that your installation appears to be working correctly.
To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.
To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash
Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/
For more examples and ideas, visit:
 https://docs.docker.com/get-started/
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker docker pull ubuntu                  
docker: unknown command: docker docker
Run 'docker --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker pull ubuntu                  
Using default tag: latest
latest: Pulling from library/ubuntu
86790fc5660d: Pull complete 
d72c28428c84: Download complete 
Digest: sha256:186072bba1b2f436cbb91ef2567abca677337cfc786c86e107d25b7072feef0c
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -it ubuntu
root@218f5ac9e216:/# ls
bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@218f5ac9e216:/# mkdir cat
root@218f5ac9e216:/# ls
bin  boot  cat  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@218f5ac9e216:/# env
HOSTNAME=218f5ac9e216
PWD=/
HOME=/root
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.avif=01;35:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:*~=00;90:*#=00;90:*.bak=00;90:*.crdownload=00;90:*.dpkg-dist=00;90:*.dpkg-new=00;90:*.dpkg-old=00;90:*.dpkg-tmp=00;90:*.old=00;90:*.orig=00;90:*.part=00;90:*.rej=00;90:*.rpmnew=00;90:*.rpmorig=00;90:*.rpmsave=00;90:*.swp=00;90:*.tmp=00;90:*.ucf-dist=00;90:*.ucf-new=00;90:*.ucf-old=00;90:
TERM=xterm
SHLVL=1
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
_=/usr/bin/env
root@218f5ac9e216:/# exit
exit
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










Docker - image - container buld 


















(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps -a
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS                      PORTS                                     NAMES
218f5ac9e216   ubuntu                            "/bin/bash"              5 minutes ago    Exited (0) 2 minutes ago                                              nice_benz
99271cc37279   hello-world                       "/hello"                 12 minutes ago   Exited (0) 12 minutes ago                                             charming_lamarr
c6522018a9a8   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   29 minutes ago   Up 29 minutes               0.0.0.0:8088->80/tcp, [::]:8088->80/tcp   welcome-to-docker
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS          PORTS                                     NAMES
c6522018a9a8   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   29 minutes ago   Up 29 minutes   0.0.0.0:8088->80/tcp, [::]:8088->80/tcp   welcome-to-docker
(base) abhijayhome@Abhijays-MacBook-Air ~ % 











(base) abhijayhome@Abhijays-MacBook-Air ~ % docker start 218f5ac9e2165076dc40bc983f2df1fd300a9fa785617454a1d10a4053c31ce9
218f5ac9e2165076dc40bc983f2df1fd300a9fa785617454a1d10a4053c31ce9
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS          PORTS                                     NAMES
218f5ac9e216   ubuntu                            "/bin/bash"              8 minutes ago    Up 22 seconds                                             nice_benz
c6522018a9a8   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   32 minutes ago   Up 32 minutes   0.0.0.0:8088->80/tcp, [::]:8088->80/tcp   welcome-to-docker

(base) abhijayhome@Abhijays-MacBook-Air ~ % docker stop nice_benz
nice_benz
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker stop welcome-to-docker
welcome-to-docker
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps                    
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
(base) abhijayhome@Abhijays-MacBook-Air ~ %      











(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                                                                                       i Info →   U  In Use
IMAGE                             ID             DISK USAGE   CONTENT SIZE   EXTRA
docker/welcome-to-docker:latest   c4d56c24da4f       22.9MB         6.35MB    U   
hello-world:latest                85404b3c5395       22.5kB         10.2kB    U   
ubuntu:latest                     186072bba1b2        141MB         30.8MB    U   
(base) abhijayhome@Abhijays-MacBook-Air ~ % 











(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi 85404b3c5395
Error response from daemon: conflict: unable to delete 85404b3c5395 (must be forced) - image is being used by stopped container 99271cc37279
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps -a
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS                       PORTS     NAMES
218f5ac9e216   ubuntu                            "/bin/bash"              13 minutes ago   Exited (137) 4 minutes ago             nice_benz
99271cc37279   hello-world                       "/hello"                 20 minutes ago   Exited (0) 20 minutes ago              charming_lamarr
c6522018a9a8   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   37 minutes ago   Exited (0) 4 minutes ago               welcome-to-docker
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rm 99271cc37279
99271cc37279
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi hello-world 
Untagged: hello-world:latest
Deleted: sha256:85404b3c53951c3ff5d40de0972b1bb21fafa2e8daa235355baf44f33db9dbdd
(base) abhijayhome@Abhijays-MacBook-Air ~ % 









Now let us delete the files -
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                                                                                       i Info →   U  In Use
IMAGE                             ID             DISK USAGE   CONTENT SIZE   EXTRA
docker/welcome-to-docker:latest   c4d56c24da4f       22.9MB         6.35MB    U   
ubuntu:latest                     186072bba1b2        141MB         30.8MB    U   
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps -a 
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS                       PORTS     NAMES
218f5ac9e216   ubuntu                            "/bin/bash"              16 minutes ago   Exited (137) 7 minutes ago             nice_benz
c6522018a9a8   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   40 minutes ago   Exited (0) 7 minutes ago               welcome-to-docker
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rm 218f5ac9e216
218f5ac9e216
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi ubuntu
Untagged: ubuntu:latest
Deleted: sha256:186072bba1b2f436cbb91ef2567abca677337cfc786c86e107d25b7072feef0c
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                                                                                       i Info →   U  In Use
IMAGE                             ID             DISK USAGE   CONTENT SIZE   EXTRA
docker/welcome-to-docker:latest   c4d56c24da4f       22.9MB         6.35MB    U   
ubuntu:latest                     186072bba1b2        141MB         30.8MB    U   
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps -a 
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS                       PORTS     NAMES
218f5ac9e216   ubuntu                            "/bin/bash"              16 minutes ago   Exited (137) 7 minutes ago             nice_benz
c6522018a9a8   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   40 minutes ago   Exited (0) 7 minutes ago               welcome-to-docker
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rm 218f5ac9e216
218f5ac9e216
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi ubuntu
Untagged: ubuntu:latest
Deleted: sha256:186072bba1b2f436cbb91ef2567abca677337cfc786c86e107d25b7072feef0c
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rm c6522018a9a8
c6522018a9a8
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi c6522018a9a8
Error response from daemon: No such image: c6522018a9a8:latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi welcome-to-docker
Error response from daemon: No such image: welcome-to-docker:latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi docker/welcome-to-docker:latest
Untagged: docker/welcome-to-docker:latest
Deleted: sha256:c4d56c24da4f009ecf8352146b43497fe78953edb4c679b841732beb97e588b0
(base) abhijayhome@Abhijays-MacBook-Air ~ % 








docker pull mysql
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker pull mysql
Using default tag: latest
latest: Pulling from library/mysql
8eafc12891f6: Pull complete 
43d9ef92a2af: Pull complete 
9f79027f52ee: Pull complete 
bd468e076f5f: Pull complete 
ed3544b01d14: Pull complete 
6742f724b859: Pull complete 
083ee06ae188: Pull complete 
7512322a9b11: Pull complete 
5a795b6ed290: Pull complete 
e36e0b048a44: Pull complete 
0b502d61e919: Download complete 
714d9b174b27: Download complete 
Digest: sha256:24e450bbd24f621c71b10404c946cc9ea1cbb0e6e7464b2be2de5193dcf1d05b
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker pull mysql:8.0
8.0: Pulling from library/mysql
75c435c281e9: Pull complete 
c37801a280be: Pull complete 
6c256042de94: Pull complete 
8cc36d345172: Pull complete 
93de024cb1a2: Pull complete 
ce5de6158b5f: Pull complete 
07a8c26676ac: Pull complete 
c941fde55339: Pull complete 
e00d06eab7f5: Pull complete 
ffcdcd51b74a: Pull complete 
8adcca81989c: Download complete 
cb30400a5864: Download complete 
Digest: sha256:64756cc92f707eb504496d774353990bcb0f6999ddf598b6ad188f2da66bd000
Status: Downloaded newer image for mysql:8.0
docker.io/library/mysql:8.0
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                          i Info →   U  In Use
IMAGE          ID             DISK USAGE   CONTENT SIZE   EXTRA
mysql:8.0      64756cc92f70       1.08GB          243MB        
mysql:latest   24e450bbd24f       1.28GB          278MB        
(base) abhijayhome@Abhijays-MacBook-Air ~ % 




















     
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d -e MYSQL_ROOT_PASSWORD=secret mysql
a852c45c739f39e825271f7deeace408a4b6a1c0dd1e0ed261b16717b552c90c
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                 NAMES
a852c45c739f   mysql     "docker-entrypoint.s…"   14 seconds ago   Up 13 seconds   3306/tcp, 33060/tcp   eager_panini
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d -e MYSQL_ROOT_PASSWORD=secret --name mysql-older mysql:8.0
e1d86393f662d30dab99565d50e67ac9caf3cd449da2d68fa888995719b254d0










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                 NAMES
e1d86393f662   mysql:8.0   "docker-entrypoint.s…"   19 seconds ago   Up 18 seconds   3306/tcp, 33060/tcp   mysql-older
a852c45c739f   mysql       "docker-entrypoint.s…"   2 minutes ago    Up 2 minutes    3306/tcp, 33060/tcp   eager_panini
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                 NAMES
e1d86393f662   mysql:8.0   "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   3306/tcp, 33060/tcp   mysql-older
a852c45c739f   mysql       "docker-entrypoint.s…"   5 minutes ago   Up 5 minutes   3306/tcp, 33060/tcp   eager_panini
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker stop a852c45c739f 
a852c45c739f
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rm a852c45c739f   
a852c45c739f
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                          i Info →   U  In Use
IMAGE          ID             DISK USAGE   CONTENT SIZE   EXTRA
mysql:8.0      64756cc92f70       1.08GB          243MB    U   
mysql:latest   24e450bbd24f       1.28GB          278MB        
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rmi mysql
Untagged: mysql:latest
Deleted: sha256:24e450bbd24f621c71b10404c946cc9ea1cbb0e6e7464b2be2de5193dcf1d05b
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                 NAMES
e1d86393f662   mysql:8.0   "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   3306/tcp, 33060/tcp   mysql-older
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                          i Info →   U  In Use
IMAGE       ID             DISK USAGE   CONTENT SIZE   EXTRA
mysql:8.0   64756cc92f70       1.08GB          243MB    U   
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker pull mysql
Using default tag: latest
latest: Pulling from library/mysql
8eafc12891f6: Pull complete 
7512322a9b11: Pull complete 
bd468e076f5f: Pull complete 
6742f724b859: Pull complete 
9f79027f52ee: Pull complete 
43d9ef92a2af: Pull complete 
5a795b6ed290: Pull complete 
ed3544b01d14: Pull complete 
083ee06ae188: Pull complete 
0b502d61e919: Download complete 
714d9b174b27: Download complete 
Digest: sha256:24e450bbd24f621c71b10404c946cc9ea1cbb0e6e7464b2be2de5193dcf1d05b
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % clear










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d -e MYSQL_ROOT_PASSWORD=secret --name mysql-latest mysql   
26bb91854fb80db0a97c8cee302d82a9c458b19849ef990c8872c1387e4ff665
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps    
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                 NAMES
26bb91854fb8   mysql       "docker-entrypoint.s…"   14 seconds ago   Up 13 seconds   3306/tcp, 33060/tcp   mysql-latest
e1d86393f662   mysql:8.0   "docker-entrypoint.s…"   8 minutes ago    Up 8 minutes    3306/tcp, 33060/tcp   mysql-older
(base) abhijayhome@Abhijays-MacBook-Air ~ % 








Port binding – 

8080        5000 

Older – 3306 


Latest  —
3306




docker run -p8080:3306 IMAGE_NAME



(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps 
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS          PORTS                 NAMES
26bb91854fb8   mysql       "docker-entrypoint.s…"   3 minutes ago    Up 3 minutes    3306/tcp, 33060/tcp   mysql-latest
e1d86393f662   mysql:8.0   "docker-entrypoint.s…"   11 minutes ago   Up 11 minutes   3306/tcp, 33060/tcp   mysql-older
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker stop mysql-latest
mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker stop mysql-latest
mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rm mysql-latest
mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker stop mysql-older
mysql-older
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker rm mysql-older
mysql-older
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                          i Info →   U  In Use
IMAGE          ID             DISK USAGE   CONTENT SIZE   EXTRA
mysql:8.0      64756cc92f70       1.08GB          243MB        
mysql:latest   24e450bbd24f       1.28GB          278MB        
(base) abhijayhome@Abhijays-MacBook-Air ~ % 






















(base) abhijayhome@Abhijays-MacBook-Air ~ % docker images
                                                                                                                                                   i Info →   U  In Use
IMAGE          ID             DISK USAGE   CONTENT SIZE   EXTRA
mysql:8.0      64756cc92f70       1.08GB          243MB        
mysql:latest   24e450bbd24f       1.28GB          278MB        
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d -e MYSQL_ROOT_PASSWORD=secret --name mysql-latest -p8080:3306 mysql 
c6accf4c374eb1c25f0e9c483d822bca021e042712dfdab35fa12c0f2c8c5348
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                         NAMES
c6accf4c374e   mysql     "docker-entrypoint.s…"   11 seconds ago   Up 10 seconds   0.0.0.0:8080->3306/tcp, [::]:8080->3306/tcp   mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d -e MYSQL_ROOT_PASSWORD=secret --name mysql-older -p8080:3306 mysql
559fdc10053a30a5a8e6a837cf0a545c8ce39fb7f99d5d5a65754d659d6c196d
docker: Error response from daemon: failed to set up container networking: driver failed programming external connectivity on endpoint mysql-older (c0182d1978b98cdcc00741a2db0f6532c1d9f1af5addfa1842cd5cd76ee1d9f5): Bind for 0.0.0.0:8080 failed: port is already allocated
Run 'docker run --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d -e MYSQL_ROOT_PASSWORD=secret --name mysql-older -p3000:3306 mysql
f1803c560bbbad293b17716ddf9c950cc5f69478e5057db116c98f9c7935ec9c
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS                                         NAMES
f1803c560bbb   mysql     "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   0.0.0.0:3000->3306/tcp, [::]:3000->3306/tcp   mysql-older
c6accf4c374e   mysql     "docker-entrypoint.s…"   4 minutes ago    Up 4 minutes   0.0.0.0:8080->3306/tcp, [::]:8080->3306/tcp   mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % 











(base) abhijayhome@Abhijays-MacBook-Air ~ % docker logs mysql-latest
2026-03-22 19:46:54+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 9.6.0-1.el9 started.
2026-03-22 19:46:54+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
2026-03-22 19:46:54+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 9.6.0-1.el9 started.
2026-03-22 19:46:55+00:00 [Note] [Entrypoint]: Initializing database files
2026-03-22T19:46:55.151589Z 0 [System] [MY-015017] [Server] MySQL Server Initialization - start.
2026-03-22T19:46:55.152884Z 0 [System] [MY-013169] [Server] /usr/sbin/mysqld (mysqld 9.6.0) initializing of server in progress as process 80
2026-03-22T19:46:55.159428Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-03-22T19:46:55.422572Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-03-22T19:46:56.414611Z 6 [Warning] [MY-010453] [Server] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
2026-03-22T19:46:58.121496Z 0 [System] [MY-015018] [Server] MySQL Server Initialization - end.
2026-03-22 19:46:58+00:00 [Note] [Entrypoint]: Database files initialized
2026-03-22 19:46:58+00:00 [Note] [Entrypoint]: Starting temporary server
2026-03-22T19:46:58.169441Z 0 [System] [MY-015015] [Server] MySQL Server - start.
2026-03-22T19:46:58.382808Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 9.6.0) starting as process 117
2026-03-22T19:46:58.382826Z 0 [System] [MY-015590] [Server] MySQL Server has access to 8 logical CPUs.
2026-03-22T19:46:58.382845Z 0 [System] [MY-015590] [Server] MySQL Server has access to 4108828672 bytes of physical memory.
2026-03-22T19:46:58.399652Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-03-22T19:46:58.662021Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-03-22T19:46:58.906507Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2026-03-22T19:46:58.906541Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2026-03-22T19:46:58.908532Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2026-03-22T19:46:58.926181Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Socket: /var/run/mysqld/mysqlx.sock
2026-03-22T19:46:58.926283Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '9.6.0'  socket: '/var/run/mysqld/mysqld.sock'  port: 0  MySQL Community Server - GPL.
2026-03-22 19:46:58+00:00 [Note] [Entrypoint]: Temporary server started.
'/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
Warning: Unable to load '/usr/share/zoneinfo/iso3166.tab' as time zone. Skipping it.
Warning: Unable to load '/usr/share/zoneinfo/leap-seconds.list' as time zone. Skipping it.
Warning: Unable to load '/usr/share/zoneinfo/leapseconds' as time zone. Skipping it.
Warning: Unable to load '/usr/share/zoneinfo/tzdata.zi' as time zone. Skipping it.
Warning: Unable to load '/usr/share/zoneinfo/zone.tab' as time zone. Skipping it.
Warning: Unable to load '/usr/share/zoneinfo/zone1970.tab' as time zone. Skipping it.
2026-03-22 19:47:00+00:00 [Note] [Entrypoint]: Stopping temporary server
2026-03-22T19:47:00.864486Z 11 [System] [MY-013172] [Server] Received SHUTDOWN from user root. Shutting down mysqld (Version: 9.6.0).
2026-03-22T19:47:02.345207Z 0 [System] [MY-010910] [Server] /usr/sbin/mysqld: Shutdown complete (mysqld 9.6.0)  MySQL Community Server - GPL.
2026-03-22T19:47:02.345233Z 0 [System] [MY-015016] [Server] MySQL Server - end.
2026-03-22 19:47:02+00:00 [Note] [Entrypoint]: Temporary server stopped
2026-03-22 19:47:02+00:00 [Note] [Entrypoint]: MySQL init process done. Ready for start up.
2026-03-22T19:47:02.906273Z 0 [System] [MY-015015] [Server] MySQL Server - start.
2026-03-22T19:47:03.145593Z 0 [System] [MY-010116] [Server] /usr/sbin/mysqld (mysqld 9.6.0) starting as process 1
2026-03-22T19:47:03.145613Z 0 [System] [MY-015590] [Server] MySQL Server has access to 8 logical CPUs.
2026-03-22T19:47:03.145657Z 0 [System] [MY-015590] [Server] MySQL Server has access to 4108828672 bytes of physical memory.
2026-03-22T19:47:03.154853Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2026-03-22T19:47:03.337502Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2026-03-22T19:47:03.549002Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2026-03-22T19:47:03.549039Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2026-03-22T19:47:03.552049Z 0 [Warning] [MY-011810] [Server] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
2026-03-22T19:47:03.568038Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060, socket: /var/run/mysqld/mysqlx.sock
2026-03-22T19:47:03.568141Z 0 [System] [MY-010931] [Server] /usr/sbin/mysqld: ready for connections. Version: '9.6.0'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server - GPL.
(base) abhijayhome@Abhijays-MacBook-Air ~ % 




















• abhijayhome — root@218f5ac9e216: /— -zsh —167×26
I(base) abhijayhome@Abhijays-MacBook-Air ~ % docker exec -it mysql-latest /bin/bash [bash-5.1# ls
afs
docker-entrypoint-initdb.d
etc home
[bash-5.1# env
MYSQL_MAJOR=innovation HOSTNAME=c6accf4c374e
PWD=/
MYSQL_ROOT_PASSWORD=secret
HOME=/ root
MYSQL_VERSION=9.6.0-1.e19
GOSU_VERSION=1.19
TERM=xterm
SHLVL=1
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
MYSQL_SHELL_VERSION=9.6.0-1.e19
_=/usr/bin/env [bash-5.1# exit
(base) abhijayhome@Abhijays-MacBook-Air ~ % clearl










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS                                         NAMES
f1803c560bbb   mysql     "docker-entrypoint.s…"   6 minutes ago    Up 6 minutes    0.0.0.0:3000->3306/tcp, [::]:3000->3306/tcp   mysql-older
c6accf4c374e   mysql     "docker-entrypoint.s…"   10 minutes ago   Up 10 minutes   0.0.0.0:8080->3306/tcp, [::]:8080->3306/tcp   mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










Developing APPLICATION WITH DOCKER 












(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
ef61529f144d   bridge    bridge    local
ba7dab1cc941   host      host      local
89af743a82e9   none      null      local
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network ls
NETWORK ID     NAME      DRIVER    SCOPE
ef61529f144d   bridge    bridge    local
ba7dab1cc941   host      host      local
89af743a82e9   none      null      local
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network create mongo-network
7a965cd4b8eac93ad970538349bf16cdc6f1a8544d07f6877e8deed6d657a579
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network ls                   
NETWORK ID     NAME            DRIVER    SCOPE
ef61529f144d   bridge          bridge    local
ba7dab1cc941   host            host      local
7a965cd4b8ea   mongo-network   bridge    local
89af743a82e9   none            null      local
(base) abhijayhome@Abhijays-MacBook-Air ~ % 










Setting up mongo and mongo-espress in docker desktop app –








(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d \
> -p27017:27017 \
> --name mongo \
> --network mongo-network \
> -e MONGO_INITDB_ROOT_USERNAME:admin \
> -e MONGO_INITDB_ROOT_PASSWORD:qwerty \
> mongo
Unable to find image 'mongo:latest' locally
latest: Pulling from library/mongo
a9554779821e: Pull complete 
9104c4a307f0: Pull complete 
86297d6e55b1: Pull complete 
525bed6c17aa: Pull complete 
2793ee0b560f: Pull complete 
86790fc5660d: Pull complete 
a88d203c09f0: Pull complete 
c95d86c562cd: Pull complete 
d3d4ad92f865: Download complete 
5d9cae264b1b: Download complete 
Digest: sha256:d343c378b5c6e2fe373174abcf4a877be0dfc721b5d0b9d582204dccb1c00b86
Status: Downloaded newer image for mongo:latest
c51e7ef389f355ab856d44aac25bfe444ca90f9cdb9648571bf0b5768dcf01da
(base) abhijayhome@Abhijays-MacBook-Air ~ % 








Setting -https://hub.docker.com/_/mongo 
services:
  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_URL: mongodb://root:example@mongo:27017/
      ME_CONFIG_BASICAUTH_ENABLED: true
      ME_CONFIG_BASICAUTH_USERNAME: mongoexpressuser
      ME_CONFIG_BASICAUTH_PASSWORD: mongoexpresspass









Settimnhg u mogo -express now –
https://hub.docker.com/_/mongo-express 
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d \
> -p8081:8081 \
> --name mongo-express \
> --network mongo-network \
> -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
> -e ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty \
> -e ME_CONFIG_MONGODB_URL="mongodb://admin:qwerty@mongo:27017" \
> mongo-express
Unable to find image 'mongo-express:latest' locally
latest: Pulling from library/mongo-express
f2d515a8401d: Pull complete 
c6b39de5b339: Pull complete 
41c65f6bdf40: Pull complete 
23ee6393f192: Pull complete 
4a17d49bb7c9: Pull complete 
2aa624262f6c: Pull complete 
8f5ec9da9bc0: Pull complete 
f541ec1a4067: Pull complete 
14823bc6c926: Download complete 
0b5697ffa03e: Download complete 
Digest: sha256:1b23d7976f0210dbec74045c209e52fbb26d29b2e873d6c6fa3d3f0ae32c2a64
Status: Downloaded newer image for mongo-express:latest
a71e5e53dc13e892483c5bb2698b2ac0ee9bc976b5a2a26b507ecdd17491b58d
(base) abhijayhome@Abhijays-MacBook-Air ~ % 








Perfect 👍 — this is NOT an error, this is actually good news.

✅ What This Means
network with name mongo-network already exists

👉 Means:
Network is already created ✅
You don’t need to create it again

🚀 What To Do Now
👉 Simply skip Step 1 and continue:

🔹 Step 2: Run Mongo
docker run -d \
-p 27017:27017 \
--name mongo \
--network mongo-network \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=qwerty \
mongo


🔹 Step 3: Run Mongo Express
docker run -d \
-p 8081:8081 \
--name mongo-express \
--network mongo-network \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty \
-e ME_CONFIG_MONGODB_SERVER=mongo \
mongo-express


🔹 Step 4: Verify
docker ps


🔹 Step 5: Open
👉 http://localhost:8081

🧠 Pro Tip (Useful Command)
If you want to see networks:
docker network ls


⚡ If You Ever Want to Reset Network
docker network rm mongo-network
docker network create mongo-network


🔥 You’re Doing Exactly Right
This is how real devs work:
Try command
See error
Understand → fix → move forward

🎯 Next Move
After this works, say:
docker compose
I’ll show you how to run ALL this in one file (industry level) 🚀








Issue i get then i fix - chatgpt helped me 
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network create mongo-network
Error response from daemon: network with name mongo-network already exists
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d \
-p 27017:27017 \
--name mongo \
--network mongo-network \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=qwerty \
mongo
c18f30924341c1349c81adc590a4f0532571c94b7e473f2d1f30bc2828182e05
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker run -d \
-p 8081:8081 \
--name mongo-express \
--network mongo-network \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty \
-e ME_CONFIG_MONGODB_SERVER=mongo \
mongo-express
108f0ca97a1d3b9228a467b87c6aeb1bb11ae4a69c446427ab0e6bbb95ab7915
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker ps
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS                                             NAMES
108f0ca97a1d   mongo-express   "/sbin/tini -- /dock…"   7 seconds ago    Up 6 seconds    0.0.0.0:8081->8081/tcp, [::]:8081->8081/tcp       mongo-express
c18f30924341   mongo           "docker-entrypoint.s…"   18 seconds ago   Up 17 seconds   0.0.0.0:27017->27017/tcp, [::]:27017->27017/tcp   mongo
f1803c560bbb   mysql           "docker-entrypoint.s…"   41 minutes ago   Up 41 minutes   0.0.0.0:3000->3306/tcp, [::]:3000->3306/tcp       mysql-older
c6accf4c374e   mysql           "docker-entrypoint.s…"   45 minutes ago   Up 45 minutes   0.0.0.0:8080->3306/tcp, [::]:8080->3306/tcp       mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air ~ % 








Command to run 
docker compose -f docker-compose.yaml up -d 









docker-compose up -d
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker-compose up -d
WARN[0000] /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/docker-compose.yaml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] up 2/2
 ✔ Image mongo:latest         Pulled                                                                                                                    7.0s
 ✔ Image mongo-express:latest Pulled                                                                                                                    7.0s
[+] Building 4.6s (13/13) FINISHED                                                                                                                          
 => [internal] load local bake definitions                                                                                                             0.0s
 => => reading from stdin 576B                                                                                                                         0.0s
 => [internal] load build definition from Dockerfile                                                                                                   0.0s
 => => transferring dockerfile: 349B                                                                                                                   0.0s
 => [internal] load metadata for docker.io/library/node:20-slim                                                                                        2.3s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                            0.0s
 => [internal] load .dockerignore                                                                                                                      0.0s
 => => transferring context: 2B                                                                                                                        0.0s
 => [1/5] FROM docker.io/library/node:20-slim@sha256:17281e8d1dc4d671976c6b89a12f47a44c2f390b63a989e2e327631041f544fd                                  0.0s
 => => resolve docker.io/library/node:20-slim@sha256:17281e8d1dc4d671976c6b89a12f47a44c2f390b63a989e2e327631041f544fd                                  0.0s
 => [internal] load build context                                                                                                                      0.3s
 => => transferring context: 607.62kB                                                                                                                  0.2s
 => CACHED [2/5] WORKDIR /app                                                                                                                          0.0s
 => CACHED [3/5] COPY package*.json ./                                                                                                                 0.0s
 => CACHED [4/5] RUN npm install                                                                                                                       0.0s
 => [5/5] COPY . .                                                                                                                                     0.6s
 => exporting to image                                                                                                                                 1.0s
 => => exporting layers                                                                                                                                0.7s
 => => exporting manifest sha256:7d1cf63d24f77270aef560504a31cba3ce62b1f84f18a94653340a899b0deeb9                                                      0.0s
 => => exporting config sha256:2c8e8262ffca092ade4c8268ebeb302e1f8e240e2d8fc1df366aac10bb547771                                                        0.0s
 => => exporting attestation manifest sha256:b1344f14227e852bc1bb371f2dba207b6f52a862b98b504040b2584164602cd2                                          0.0s
 => => exporting manifest list sha256:5d4e178adeb76ede2c7a960a3e44abd956b94bdaa15ae021503aee8e55347c10                                                 0.0s
[+] up 6/6ing to docker.io/library/docker-test-app-2-app:latest                                                                                        0.0s
 ✔ Image mongo:latest                          Pulled                                                                                                   7.0s
 ✔ Image mongo-express:latest                  Pulled                                                                                                   7.0s
 ✔ Image docker-test-app-2-app                 Built                                                                                                    4.7s
 ✔ Container docker-test-app-2-app-1           Started                                                                                                  0.6s
 ✔ Container docker-test-app-2-mongodb-1       Started                                                                                                  0.2s
 ✔ Container docker-test-app-2-mongo-express-1 Started                                                                                                  0.2s
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 

































































Command 








stop
docker-compose down








(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker-compose down
WARN[0000] /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/docker-compose.yaml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] down 4/4
 ✔ Container docker-test-app-2-mongo-express-1 Removed                                                                                0.3s
 ✔ Container docker-test-app-2-app-1           Removed                                                                                1.3s
 ✔ Container docker-test-app-2-mongodb-1       Removed                                                                                0.2s
 ✔ Network docker-test-app-2_default           Removed                                                                                0.2s










Start and connect 
docker-compose up -d








(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker-compose up -d
WARN[0000] /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/docker-compose.yaml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] up 4/4
 ✔ Network docker-test-app-2_default           Created                                                                                0.0s
 ✔ Container docker-test-app-2-mongodb-1       Started                                                                                0.5s
 ✔ Container docker-test-app-2-app-1           Started                                                                                0.6s
 ✔ Container docker-test-app-2-mongo-express-1 Started                                                                                0.7s
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 









(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network ls
NETWORK ID     NAME                        DRIVER    SCOPE
a3e821abb27b   bridge                      bridge    local
e55ef2e62083   docker-test-app-2_default   bridge    local
ba7dab1cc941   host                        host      local
7a965cd4b8ea   mongo-network               bridge    local
89af743a82e9   none                        null      local
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network rm mongo-network
mongo-network
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker network ls              
NETWORK ID     NAME                        DRIVER    SCOPE
a3e821abb27b   bridge                      bridge    local
e55ef2e62083   docker-test-app-2_default   bridge    local
ba7dab1cc941   host                        host      local
89af743a82e9   none                        null      local
(base) abhijayhome@Abhijays-MacBook-Air ~ % 









Credentials – trae Login Now onward 
vl6a444ryn@yzcalo.com
524890
Abhijayshah74

















toolName: todo_write
            
status: success
          
Todos updated: 3 items
          

        
            
toolName: view_folder
            
status: success
          
/Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2
          

        
            
toolName: todo_write
            
status: success
          
Todos updated: 4 items
          

        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/package.json
          

        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/Dockerfile
          

        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/server.js
          

        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/docker-compose.yaml
          

        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/public/index.html
          

        
            
toolName: view_files
            
status: success
          
            
filePath: /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/public/style.css
          

        
            
toolName: todo_write
            
status: success
          
Todos updated: 4 items
          
I have thoroughly explored the project and here's a comprehensive breakdown of its structure and functionality:

**Project Overview**
This is a containerized Node.js web application that uses Express for the backend and MongoDB as its primary database. The project is designed to demonstrate a basic full-stack setup with Docker orchestration.

**Core Components**
- **Backend Service**:
    - [server.js](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/server.js) serves as the main entry point. It handles the MongoDB connection, serves static files from the `public` directory, and defines two API endpoints:
        - `GET /getUsers`: Retrieves all user documents from the `users` collection.
        - `POST /addUser`: Adds a new user to the database using data from the signup form.
    - [package.json](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/package.json) lists the essential dependencies: `express` for the web server and `mongodb` for database interactions.

- **Frontend**:
    - [public/index.html](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/public/index.html) provides a simple signup form where students can enter their email, username, and password.
    - [public/style.css](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/public/style.css) handles basic styling for the form and page layout.

- **Docker Configuration**:
    - [Dockerfile](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/Dockerfile) uses a `node:20-slim` base image, installs dependencies, and sets up the application to run on port 5050.
    - [docker-compose.yaml](file:///Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/docker-compose.yaml) orchestrates three services:
        - `app`: The Node.js application itself.
        - `mongodb`: The database instance with a persistent volume for data storage.
        - `mongo-express`: A web-based administrative interface for MongoDB, accessible on port 8082.

**Key Findings**
- **Security**: The application currently uses default credentials (e.g., `admin`/`qwerty`) in its environment variables, which is suitable for local development but should be secured for production.
- **Architecture**: The project follows a standard MVC-like pattern where static assets are separated from the server-side logic, and the infrastructure is fully automated via Docker.

This setup provides a robust foundation for building more complex features or learning about containerized microservices.










4. Dockerizing Our APP (docker file )

Test app → docker images → container 

https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/ 








Jenkins – hamri puri image ko create karega - then 








From
Workdir
Copy
Run 
CMD
Expose
ENV

____________

From
Workdir
Copy  – Host image
Run - multiple command exist 
CMD - only one command 
Expose
ENV









Layers in docker images 
layers in docker →
—--
testapp
Node
debian








(base) abhijayhome@Abhijays-MacBook-Air ~ % docker build -t testapp:1.0 .
[+] Building 0.1s (1/1) FINISHED                                                                                                                                                      docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                  0.0s
 => => transferring dockerfile: 2B                                                                                                                                                                    0.0s
ERROR: failed to build: failed to solve: failed to read dockerfile: open Dockerfile: no such file or directory
(base) abhijayhome@Abhijays-MacBook-Air ~ % docker build -t dcoker-test-app-2:1.0 .
[+] Building 0.0s (1/1) FINISHED                                                                                                                                                      docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                  0.0s
 => => transferring dockerfile: 2B                                                                                                                                                                    0.0s
ERROR: failed to build: failed to solve: failed to read dockerfile: open Dockerfile: no such file or directory
(base) abhijayhome@Abhijays-MacBook-Air ~ % ls
ai_completion			automation_script-1.py.save	Documents			Library				nltk_data			trai
anaconda_projects		automation_script.py		Downloads			MEGA_2				OneDrive			Untitled.ipynb
AndroidStudioProjects		automation_script.py.save	fastmcp-env			mongodb-macos-aarch64-8.0.12	Pictures			Untitled1.ipynb
anydesk				data				Google Drive			Movies				Public				Videos
Applications			Desktop				iCloud Drive (Archive)		Music				Python
(base) abhijayhome@Abhijays-MacBook-Air ~ % cd MEGA_2
(base) abhijayhome@Abhijays-MacBook-Air MEGA_2 % ls
AWS,OS,CN,DBMS			certicicates			EXAM_ and grade _GRADE history	family document			RESUME
BANK AND Scholarship VIT	core-subject			ExcalidrawZ			NEO PAT- Company VIT		TCS-NQT
Capstone			DSA				Faculty list updated.xlsx	new resume			VSCODE
(base) abhijayhome@Abhijays-MacBook-Air MEGA_2 % cd VSCODE
(base) abhijayhome@Abhijays-MacBook-Air VSCODE % ls
AI						DSA_RED-lovebabbar				JavaScript					PYTHON
Android App development				DSA_Tutorials_For_Beginners			leetcode					ReactJs
C++						DSA-Love-3.0					Mern Stack					resume_research
codevita					figma						ML						Screenshot 2024-08-02 at 3.22.11 PM.png
COMPANY_interview_QUESTION			Git Notes.pdf					MongoDB						SQL
curiouscoding					IBM Blockchain					mypackage					untitled folder
DBMS						index-Vscode__.txt				OS_Full_Notes.pdf				VSCODE.iml
DEEPAK KE CODE					index.txt					PHP						web design Screen Shot
Django						iOS development					PortfoliO					WEB_DEVELOPMENT
DSA						Java_folder					PROJECT
(base) abhijayhome@Abhijays-MacBook-Air VSCODE % cd PRoject
(base) abhijayhome@Abhijays-MacBook-Air PRoject % ls
docker-test-app-2	docker-testapp-main	Story-book-village
(base) abhijayhome@Abhijays-MacBook-Air PRoject % cd docker-test-app-2
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker build -t dcoker-test-app-2:1.0 .
[+] Building 3.2s (11/11) FINISHED                                                                                                                                                    docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                  0.0s
 => => transferring dockerfile: 349B                                                                                                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:20-slim                                                                                                                                       2.8s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                                           0.0s
 => [internal] load .dockerignore                                                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                                                       0.0s
 => [1/5] FROM docker.io/library/node:20-slim@sha256:17281e8d1dc4d671976c6b89a12f47a44c2f390b63a989e2e327631041f544fd                                                                                 0.0s
 => => resolve docker.io/library/node:20-slim@sha256:17281e8d1dc4d671976c6b89a12f47a44c2f390b63a989e2e327631041f544fd                                                                                 0.0s
 => [internal] load build context                                                                                                                                                                     0.2s
 => => transferring context: 202.22kB                                                                                                                                                                 0.2s
 => CACHED [2/5] WORKDIR /app                                                                                                                                                                         0.0s
 => CACHED [3/5] COPY package*.json ./                                                                                                                                                                0.0s
 => CACHED [4/5] RUN npm install                                                                                                                                                                      0.0s
 => CACHED [5/5] COPY . .                                                                                                                                                                             0.0s
 => exporting to image                                                                                                                                                                                0.1s
 => => exporting layers                                                                                                                                                                               0.0s
 => => exporting manifest sha256:2e694eec4fe90763247662c81491b3c9eced01abba28b3e13ed732aeeec21a30                                                                                                     0.0s
 => => exporting config sha256:98e1819060653d1c3da68ac3d361f9b5bb7c770501df902061b9f6a83282763a                                                                                                       0.0s
 => => exporting attestation manifest sha256:ede3bc8f98f7cf88a12cf1bb0bf901f96d0f9c13bca633ffdce3299ec3f23937                                                                                         0.0s
 => => exporting manifest list sha256:37c11a6e1bc6c6773fb01fe53478f26dac3d43384c4f4fe4ad8df6aa8ced64e9                                                                                                0.0s
 => => naming to docker.io/library/dcoker-test-app-2:1.0                                                                                                                                              0.0s
 => => unpacking to docker.io/library/dcoker-test-app-2:1.0                                                                                                                                           0.0s
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 




















(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker images
                                                                                                                                                                                       i Info →   U  In Use
IMAGE                          ID             DISK USAGE   CONTENT SIZE   EXTRA
dcoker-test-app-2:1.0          37c11a6e1bc6        365MB         81.9MB        
docker-test-app-2-app:latest   5d4e178adeb7        365MB         81.9MB    U   
mongo-express:latest           1b23d7976f02        286MB         59.5MB    U   
mongo:latest                   d343c378b5c6       1.27GB          325MB    U   
mysql:8.0                      64756cc92f70       1.08GB          243MB        
mysql:latest                   24e450bbd24f       1.28GB          278MB    U   
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run docker-test-app-2:1.0
Unable to find image 'docker-test-app-2:1.0' locally
docker: Error response from daemon: pull access denied for docker-test-app-2, repository does not exist or may require 'docker login'
Run 'docker run --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run docker-test-app:1.0  
Unable to find image 'docker-test-app:1.0' locally
docker: Error response from daemon: pull access denied for docker-test-app, repository does not exist or may require 'docker login'
Run 'docker run --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run docker-test-app-2:1.0
Unable to find image 'docker-test-app-2:1.0' locally
docker: Error response from daemon: pull access denied for docker-test-app-2, repository does not exist or may require 'docker login'
Run 'docker run --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run docker-test-app-2-app:1.0
Unable to find image 'docker-test-app-2-app:1.0' locally
docker: Error response from daemon: pull access denied for docker-test-app-2-app, repository does not exist or may require 'docker login'
Run 'docker run --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker build -t dcoker-test-app-2-app:1.0 .
[+] Building 2.4s (11/11) FINISHED                                                                                                                                                    docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                  0.0s
 => => transferring dockerfile: 349B                                                                                                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:20-slim                                                                                                                                       2.1s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                                           0.0s
 => [internal] load .dockerignore                                                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                                                       0.0s
 => [1/5] FROM docker.io/library/node:20-slim@sha256:17281e8d1dc4d671976c6b89a12f47a44c2f390b63a989e2e327631041f544fd                                                                                 0.0s
 => => resolve docker.io/library/node:20-slim@sha256:17281e8d1dc4d671976c6b89a12f47a44c2f390b63a989e2e327631041f544fd                                                                                 0.0s
 => [internal] load build context                                                                                                                                                                     0.2s
 => => transferring context: 201.89kB                                                                                                                                                                 0.2s
 => CACHED [2/5] WORKDIR /app                                                                                                                                                                         0.0s
 => CACHED [3/5] COPY package*.json ./                                                                                                                                                                0.0s
 => CACHED [4/5] RUN npm install                                                                                                                                                                      0.0s
 => CACHED [5/5] COPY . .                                                                                                                                                                             0.0s
 => exporting to image                                                                                                                                                                                0.0s
 => => exporting layers                                                                                                                                                                               0.0s
 => => exporting manifest sha256:2e694eec4fe90763247662c81491b3c9eced01abba28b3e13ed732aeeec21a30                                                                                                     0.0s
 => => exporting config sha256:98e1819060653d1c3da68ac3d361f9b5bb7c770501df902061b9f6a83282763a                                                                                                       0.0s
 => => exporting attestation manifest sha256:79d0f4e9ad3251a341abdd28685e8921b96bd8bf1e6ec915b05d20e91694cca7                                                                                         0.0s
 => => exporting manifest list sha256:e97a27e31cbd43b7774b67d585501c4635da9cd36250fcab30c8c53db4a71b63                                                                                                0.0s
 => => naming to docker.io/library/dcoker-test-app-2-app:1.0                                                                                                                                          0.0s
 => => unpacking to docker.io/library/dcoker-test-app-2-app:1.0                                                                                                                                       0.0s
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run dcoker-test-app-2-app:1.0
server running on port 5050
MongoDB connection error: MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
    at Topology.selectServer (/app/node_modules/mongodb/lib/sdam/topology.js:320:38)
    at runNextTicks (node:internal/process/task_queues:60:5)
    at listOnTimeout (node:internal/timers:545:9)
    at process.processTimers (node:internal/timers:519:7)
    at async Topology._connect (/app/node_modules/mongodb/lib/sdam/topology.js:199:28)
    at async Topology.connect (/app/node_modules/mongodb/lib/sdam/topology.js:151:13)
    at async topologyConnect (/app/node_modules/mongodb/lib/mongo_client.js:232:17)
    at async MongoClient._connect (/app/node_modules/mongodb/lib/mongo_client.js:245:13)
    at async MongoClient.connect (/app/node_modules/mongodb/lib/mongo_client.js:170:13)
    at async connectDB (/app/server.js:23:9) {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'Unknown',
    servers: Map(1) { 'localhost:27017' => [ServerDescription] },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: null,
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined,
  [cause]: MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
      at Socket.<anonymous> (/app/node_modules/mongodb/lib/cmap/connect.js:285:44)
      at Object.onceWrapper (node:events:639:26)
      at Socket.emit (node:events:524:28)
      at emitErrorNT (node:internal/streams/destroy:169:8)
      at emitErrorCloseNT (node:internal/streams/destroy:128:3)
      at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
    errorLabelSet: Set(1) { 'ResetPool' },
    beforeHandshake: false,
    [cause]: Error: connect ECONNREFUSED 127.0.0.1:27017
        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1611:16) {
      errno: -111,
      code: 'ECONNREFUSED',
      syscall: 'connect',
      address: '127.0.0.1',
      port: 27017
    }
  }
}










Last login: Mon Mar 23 09:42:30 on ttys000
(base) abhijayhome@Abhijays-MacBook-Air ~ % ls
ai_completion			Library
anaconda_projects		MEGA_2
AndroidStudioProjects		mongodb-macos-aarch64-8.0.12
anydesk				Movies
Applications			Music
automation_script-1.py.save	nltk_data
automation_script.py		OneDrive
automation_script.py.save	Pictures
data				Public
Desktop				Python
Documents			trai
Downloads			Untitled.ipynb
fastmcp-env			Untitled1.ipynb
Google Drive			Videos
iCloud Drive (Archive)
(base) abhijayhome@Abhijays-MacBook-Air ~ % cd MEGA_2
(base) abhijayhome@Abhijays-MacBook-Air MEGA_2 % ls
AWS,OS,CN,DBMS			Faculty list updated.xlsx
BANK AND Scholarship VIT	family document
Capstone			NEO PAT- Company VIT
certicicates			new resume
core-subject			RESUME
DSA				TCS-NQT
EXAM_ and grade _GRADE history	VSCODE
ExcalidrawZ
(base) abhijayhome@Abhijays-MacBook-Air MEGA_2 % cd VSCODE
(base) abhijayhome@Abhijays-MacBook-Air VSCODE % ls
AI
Android App development
C++
codevita
COMPANY_interview_QUESTION
curiouscoding
DBMS
DEEPAK KE CODE
Django
DSA
DSA_RED-lovebabbar
DSA_Tutorials_For_Beginners
DSA-Love-3.0
figma
Git Notes.pdf
IBM Blockchain
index-Vscode__.txt
index.txt
iOS development
Java_folder
JavaScript
leetcode
Mern Stack
ML
MongoDB
mypackage
OS_Full_Notes.pdf
PHP
PortfoliO
PROJECT
PYTHON
ReactJs
resume_research
Screenshot 2024-08-02 at 3.22.11 PM.png
SQL
untitled folder
VSCODE.iml
web design Screen Shot
WEB_DEVELOPMENT
(base) abhijayhome@Abhijays-MacBook-Air VSCODE % cd PROJECT
(base) abhijayhome@Abhijays-MacBook-Air PROJECT % ls
docker-test-app-2	docker-testapp-main	Story-book-village
(base) abhijayhome@Abhijays-MacBook-Air PROJECT % cd docker-test-app-2
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % dcoker ps
zsh: command not found: dcoker
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED             STATUS             PORTS                                             NAMES
474c96665a2a   dcoker-test-app-2-app:1.0   "docker-entrypoint.s…"   4 minutes ago       Up 4 minutes       5050/tcp                                          zen_johnson
c78ea507e720   mongo-express:latest        "/sbin/tini -- /dock…"   About an hour ago   Up About an hour   0.0.0.0:8082->8081/tcp, [::]:8082->8081/tcp       docker-test-app-2-mongo-express-1
83a80dc9429c   docker-test-app-2-app       "docker-entrypoint.s…"   About an hour ago   Up About an hour   0.0.0.0:5050->5050/tcp, [::]:5050->5050/tcp       docker-test-app-2-app-1
600b7075a7f8   mongo:latest                "docker-entrypoint.s…"   About an hour ago   Up About an hour   0.0.0.0:27018->27017/tcp, [::]:27018->27017/tcp   docker-test-app-2-mongodb-1
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker images
                                                                                                                                                                                       i Info →   U  In Use
IMAGE                          ID             DISK USAGE   CONTENT SIZE   EXTRA
dcoker-test-app-2-app:1.0      e97a27e31cbd        365MB         81.9MB    U   
dcoker-test-app-2:1.0          37c11a6e1bc6        365MB         81.9MB    U   
docker-test-app-2-app:latest   5d4e178adeb7        365MB         81.9MB    U   
mongo-express:latest           1b23d7976f02        286MB         59.5MB    U   
mongo:latest                   d343c378b5c6       1.27GB          325MB    U   
mysql:8.0                      64756cc92f70       1.08GB          243MB        
mysql:latest                   24e450bbd24f       1.28GB          278MB    U   
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker ps -a
CONTAINER ID   IMAGE                       COMMAND                  CREATED             STATUS                     PORTS                                             NAMES
474c96665a2a   dcoker-test-app-2-app:1.0   "docker-entrypoint.s…"   7 minutes ago       Up 7 minutes               5050/tcp                                          zen_johnson
c78ea507e720   mongo-express:latest        "/sbin/tini -- /dock…"   About an hour ago   Up About an hour           0.0.0.0:8082->8081/tcp, [::]:8082->8081/tcp       docker-test-app-2-mongo-express-1
83a80dc9429c   docker-test-app-2-app       "docker-entrypoint.s…"   About an hour ago   Up About an hour           0.0.0.0:5050->5050/tcp, [::]:5050->5050/tcp       docker-test-app-2-app-1
600b7075a7f8   mongo:latest                "docker-entrypoint.s…"   About an hour ago   Up About an hour           0.0.0.0:27018->27017/tcp, [::]:27018->27017/tcp   docker-test-app-2-mongodb-1
108f0ca97a1d   mongo-express               "/sbin/tini -- /dock…"   10 hours ago        Exited (255) 2 hours ago   0.0.0.0:8081->8081/tcp                            mongo-express
c18f30924341   mongo                       "docker-entrypoint.s…"   10 hours ago        Exited (255) 2 hours ago   0.0.0.0:27017->27017/tcp                          mongo
f1803c560bbb   mysql                       "docker-entrypoint.s…"   11 hours ago        Exited (255) 2 hours ago   33060/tcp, 0.0.0.0:3000->3306/tcp                 mysql-older
c6accf4c374e   mysql                       "docker-entrypoint.s…"   11 hours ago        Exited (255) 2 hours ago   33060/tcp, 0.0.0.0:8080->3306/tcp                 mysql-latest
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker ps -a --format "table {{.Names}}\t{{.Image}}\t{{.CreatedAt}}"
NAMES                               IMAGE                       CREATED AT
zen_johnson                         dcoker-test-app-2-app:1.0   2026-03-23 12:18:19 +0530 IST
docker-test-app-2-mongo-express-1   mongo-express:latest        2026-03-23 11:00:52 +0530 IST
docker-test-app-2-app-1             docker-test-app-2-app       2026-03-23 11:00:52 +0530 IST
docker-test-app-2-mongodb-1         mongo:latest                2026-03-23 11:00:52 +0530 IST
mongo-express                       mongo-express               2026-03-23 02:02:16 +0530 IST
mongo                               mongo                       2026-03-23 02:02:05 +0530 IST
mysql-older                         mysql                       2026-03-23 01:21:11 +0530 IST
mysql-latest                        mysql                       2026-03-23 01:16:54 +0530 IST
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker images
                                                                                                                                                                                       i Info →   U  In Use
IMAGE                          ID             DISK USAGE   CONTENT SIZE   EXTRA
dcoker-test-app-2-app:1.0      e97a27e31cbd        365MB         81.9MB    U   
dcoker-test-app-2:1.0          37c11a6e1bc6        365MB         81.9MB    U   
docker-test-app-2-app:latest   5d4e178adeb7        365MB         81.9MB    U   
mongo-express:latest           1b23d7976f02        286MB         59.5MB    U   
mongo:latest                   d343c378b5c6       1.27GB          325MB    U   
mysql:8.0                      64756cc92f70       1.08GB          243MB        
mysql:latest                   24e450bbd24f       1.28GB          278MB    U   
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker ps -a --sort=created
unknown flag: --sort
Usage:  docker ps [OPTIONS]
Run 'docker ps --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 










(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker ps -a --sort=created
unknown flag: --sort
Usage:  docker ps [OPTIONS]
Run 'docker ps --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run -it docker-test-app-2:1.0 bash
Unable to find image 'docker-test-app-2:1.0' locally
docker: Error response from daemon: pull access denied for docker-test-app-2, repository does not exist or may require 'docker login'
Run 'docker run --help' for more information
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run -it dcoker-test-app-2:1.0 bash
root@43c8061f1390:/app# ls
'Docker CheatSheet ApnaCollege.pdf'   Dockerfile   README.md   app.doc	 assets   docker-compose.yaml   node_modules   package-lock.json   package.json   public   server.js
root@43c8061f1390:/app# 








I deleted teh 2 mysql and test app – keep the only 3 here this are —> 
dcoker-test-app-2-app:1.0
mongo-express:latest
mongo:latest










(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker images
                                                                                                                                                                                       i Info →   U  In Use
IMAGE                       ID             DISK USAGE   CONTENT SIZE   EXTRA
dcoker-test-app-2-app:1.0   e97a27e31cbd        365MB         81.9MB        
mongo-express:latest        1b23d7976f02        286MB         59.5MB        
mongo:latest                d343c378b5c6       1.27GB          325MB        
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 










https://hub.docker.com/repository/docker/abhijayshah/testapp/general 








(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker logout
Removing login credentials for https://index.docker.io/v1/
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker login
USING WEB-BASED LOGIN
i Info → To sign in with credentials on the command line, use 'docker login -u <username>'
         
Your one-time device confirmation code is: SFXJ-QMNW
Press ENTER to open your browser or submit your device code here: https://login.docker.com/activate
Waiting for authentication in the browser…
Login Succeeded
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker push abhijayshah/testapp
Using default tag: latest
The push refers to repository [docker.io/abhijayshah/testapp]
29b196f15acf: Pushed 
736956349215: Pushed 
65e28a35f9a8: Pushed 
d997cc310c98: Pushed 
12e3ebb04a57: Pushed 
0f2418a5451f: Pushed 
0e89c007c74e: Pushed 
39d23cce18d4: Pushed 
1d950ecd0d6d: Pushed 
3e1387c786a4: Pushed 
latest: digest: sha256:ab9bd2b8bc5ec2e6a187d0e457013cbdb2cc8aafb386d76fbf7869aaabaa02c7 size: 856
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 










(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker run -it -v /Users/abhijayhome/Desktop/data:/test/data ubuntu
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
d72c28428c84: Download complete 
Digest: sha256:186072bba1b2f436cbb91ef2567abca677337cfc786c86e107d25b7072feef0c
Status: Downloaded newer image for ubuntu:latest
root@86dc5e10f7d7:/# ls
bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  test  tmp  usr  var
root@86dc5e10f7d7:/# cd test
root@86dc5e10f7d7:/test# ls
data
root@86dc5e10f7d7:/test# cd data
root@86dc5e10f7d7:/test/data# ls
root@86dc5e10f7d7:/test/data# touch index.html
root@86dc5e10f7d7:/test/data# touch server.js
root@86dc5e10f7d7:/test/data# ls
index.html  server.js
root@86dc5e10f7d7:/test/data# exit
exit
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 






















(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS          PORTS       NAMES
6919c53788f2   mongo:latest                "docker-entrypoint.s…"   50 minutes ago   Up 50 minutes   27017/tcp   funny_booth
ed10d15fb052   dcoker-test-app-2-app:1.0   "docker-entrypoint.s…"   51 minutes ago   Up 51 minutes   5050/tcp    zen_agnesi
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker stop funny_booth zen_agnesi
funny_booth
zen_agnesi
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker ps                          
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker start 86dc5e10f7d7cecf4d4d1f26deead081821507c717a07239ae60db6a93a62bb6
86dc5e10f7d7cecf4d4d1f26deead081821507c717a07239ae60db6a93a62bb6
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker exec -it 86dc5e10f7d7cecf4d4d1f26deead081821507c717a07239ae60db6a93a62bb6 /bin/bash
root@86dc5e10f7d7:/# ls
bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  test  tmp  usr  var
root@86dc5e10f7d7:/# cd test/data 
root@86dc5e10f7d7:/test/data# ls
index.html  server.js
root@86dc5e10f7d7:/test/data# exit
exit
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 








Stops
Container removed 



(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker stop 86dc5e10f7d7cecf4d4d1f26deead081821507c717a07239ae60db6a93a62bb6
86dc5e10f7d7cecf4d4d1f26deead081821507c717a07239ae60db6a93a62bb6
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker rm 86dc5e10f7d7cecf4d4d1f26deead081821507c717a07239ae60db6a93a62bb6
86dc5e10f7d7cecf4d4d1f26deead081821507c717a07239ae60db6a93a62bb6
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % 










(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker compose -f docker-compose.yaml up                         
WARN[0000] /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/docker-compose.yaml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] up 3/3
 ✔ Container docker-test-app-2-mongodb-1       Running                                                                                                                                                0.0s
 ✔ Container docker-test-app-2-app-1           Running                                                                                                                                                0.0s
 ✔ Container docker-test-app-2-mongo-express-1 Running                                                                                                                                                0.0s
Attaching to app-1, mongo-express-1, mongodb-1
mongodb-1  | {"t":{"$date":"2026-03-23T08:18:03.984+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774253883,"ts_usec":983630,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 5, snapshot max: 5 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:19:03.998+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774253943,"ts_usec":997583,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 6, snapshot max: 6 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
v View in Docker Desktop   o View Config   w Enable Watch   d Detach










(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker compose -f docker-compose.yaml up                         
WARN[0000] /Users/abhijayhome/MEGA_2/VSCODE/PROJECT/docker-test-app-2/docker-compose.yaml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] up 3/3
 ✔ Container docker-test-app-2-mongodb-1       Running                                                                                                                                                0.0s
 ✔ Container docker-test-app-2-app-1           Running                                                                                                                                                0.0s
 ✔ Container docker-test-app-2-mongo-express-1 Running                                                                                                                                                0.0s
Attaching to app-1, mongo-express-1, mongodb-1
mongodb-1  | {"t":{"$date":"2026-03-23T08:18:03.984+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774253883,"ts_usec":983630,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 5, snapshot max: 5 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:19:03.998+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774253943,"ts_usec":997583,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 6, snapshot max: 6 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:04.009+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774254004,"ts_usec":8587,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 7, snapshot max: 7 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:13.399+00:00"},"s":"I",  "c":"STORAGE",  "id":20320,   "ctx":"conn2","msg":"createCollection","attr":{"namespace":"apnacollege-db.users","uuidDisposition":"generated","uuid":{"uuid":{"$uuid":"1dbcada2-4c5a-47fc-b077-6aff0304afad"}},"options":{}}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:13.405+00:00"},"s":"I",  "c":"INDEX",    "id":20345,   "ctx":"conn2","msg":"Index build: done building","attr":{"buildUUID":null,"collectionUUID":{"uuid":{"$uuid":"1dbcada2-4c5a-47fc-b077-6aff0304afad"}},"namespace":"apnacollege-db.users","index":"_id_","ident":"index-14e87763-9d09-42d7-9896-8a4c5f2df023","collectionIdent":"collection-669f40f5-b734-438a-bcc4-5929083b3f23","commitTimestamp":null}}
app-1      | Data inserted: new ObjectId('69c0f7bdd277819790b446b2')
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:15.767+00:00"},"s":"I",  "c":"NETWORK",  "id":22943,   "ctx":"listener","msg":"Connection accepted","attr":{"remote":"172.19.0.3:58126","isLoadBalanced":false,"uuid":{"uuid":{"$uuid":"d412d831-b21a-40bc-88c7-01ff1bb7a0ff"}},"connectionId":8,"connectionCount":7}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:15.772+00:00"},"s":"I",  "c":"NETWORK",  "id":51800,   "ctx":"conn8","msg":"client metadata","attr":{"remote":"172.19.0.3:58126","client":"conn8","negotiatedCompressors":[],"doc":{"driver":{"name":"nodejs","version":"4.13.0"},"os":{"type":"Linux","name":"linux","architecture":"arm64","version":"6.12.76-linuxkit"},"platform":"Node.js v18.20.3, LE (unified)|Node.js v18.20.3, LE (unified)"}}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:15.772+00:00"},"s":"I",  "c":"ACCESS",   "id":6788604, "ctx":"conn8","msg":"Auth metrics report","attr":{"metric":"acquireUser","micros":0}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:15.774+00:00"},"s":"I",  "c":"ACCESS",   "id":5286306, "ctx":"conn8","msg":"Successfully authenticated","attr":{"client":"172.19.0.3:58126","isSpeculative":true,"isClusterMember":false,"mechanism":"SCRAM-SHA-256","user":"admin","db":"admin","result":0,"metrics":{"conversation_duration":{"micros":1535,"summary":{"0":{"step":1,"step_total":2,"duration_micros":138},"1":{"step":2,"step_total":2,"duration_micros":38}}}},"doc":{"driver":{"name":"nodejs","version":"4.13.0"},"os":{"type":"Linux","name":"linux","architecture":"arm64","version":"6.12.76-linuxkit"},"platform":"Node.js v18.20.3, LE (unified)|Node.js v18.20.3, LE (unified)"},"extraInfo":{}}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:15.774+00:00"},"s":"I",  "c":"NETWORK",  "id":6788700, "ctx":"conn8","msg":"Received first command on ingress connection since session start or auth handshake","attr":{"elapsedMillis":0}}
mongodb-1  | {"t":{"$date":"2026-03-23T08:20:15.779+00:00"},"s":"W",  "c":"COMMAND",  "id":7024600, "ctx":"conn8","msg":"The collStats command is deprecated. For more information, see https://dochub.mongodb.org/core/collStats-deprecated"}
mongo-express-1  | GET /db/apnacollege-db/users 200 81.886 ms - 20658
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 4.170 ms - -
mongo-express-1  | GET /public/css/codemirror.css 304 2.505 ms - -
mongo-express-1  | GET /public/css/style.css 304 2.033 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 1.878 ms - -
mongo-express-1  | GET /public/css/theme/rubyblue.css 304 3.027 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 4.575 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 6.051 ms - -
mongo-express-1  | GET /public/codemirror-c3ecf01fea09ef4fd0c5.min.js 304 1.334 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 1.398 ms - -
mongo-express-1  | GET /public/collection-70f10ba9e63af80d0f15.min.js 304 2.153 ms - -
mongo-express-1  | GET / 200 77.802 ms - 10045
mongo-express-1  | GET /public/css/style.css 304 2.232 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 3.048 ms - -
mongo-express-1  | GET /public/index-56afe067afbbbde795be.min.js 304 2.442 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 1.857 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 2.894 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 3.757 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 4.299 ms - -
mongo-express-1  | GET /db/admin/ 200 32.224 ms - 10273
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 4.716 ms - -
mongo-express-1  | GET /public/css/style.css 304 4.782 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 5.261 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 4.933 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 3.950 ms - -
mongo-express-1  | GET /public/database-5a651a66c59f5316bdde.min.js 304 0.359 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.420 ms - -
mongo-express-1  | GET /db/admin 200 33.310 ms - 10273
mongo-express-1  | GET /public/css/style.css 304 2.120 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 1.988 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 2.058 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 2.111 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 2.198 ms - -
mongo-express-1  | GET /public/database-5a651a66c59f5316bdde.min.js 304 2.166 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.604 ms - -
mongo-express-1  | GET /db/admin 304 20.617 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 5.212 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 5.044 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 4.906 ms - -
mongo-express-1  | GET /public/css/style.css 304 2.645 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 0.219 ms - -
mongo-express-1  | GET /public/database-5a651a66c59f5316bdde.min.js 304 0.166 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.212 ms - -
mongo-express-1  | GET /db/admin 304 28.241 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 2.080 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 2.471 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 2.453 ms - -
mongo-express-1  | GET /public/css/style.css 304 5.554 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 0.563 ms - -
mongo-express-1  | GET /public/database-5a651a66c59f5316bdde.min.js 304 2.540 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 1.737 ms - -
mongo-express-1  | GET / 200 41.894 ms - 10045
mongo-express-1  | GET /public/css/bootstrap.min.css 304 1.588 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 1.658 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 1.845 ms - -
mongo-express-1  | GET /public/index-56afe067afbbbde795be.min.js 304 2.409 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 3.282 ms - -
mongo-express-1  | GET /public/css/style.css 304 3.397 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.207 ms - -
mongodb-1        | {"t":{"$date":"2026-03-23T08:21:04.025+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774254064,"ts_usec":24796,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 20, snapshot max: 20 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
mongodb-1        | {"t":{"$date":"2026-03-23T08:21:07.611+00:00"},"s":"I",  "c":"STORAGE",  "id":20320,   "ctx":"conn8","msg":"createCollection","attr":{"namespace":"apnacollege-db2.delete_me","uuidDisposition":"generated","uuid":{"uuid":{"$uuid":"7918262b-4d38-4991-8b35-b06eec6db41b"}},"options":{}}}
mongodb-1        | {"t":{"$date":"2026-03-23T08:21:07.618+00:00"},"s":"I",  "c":"INDEX",    "id":20345,   "ctx":"conn8","msg":"Index build: done building","attr":{"buildUUID":null,"collectionUUID":{"uuid":{"$uuid":"7918262b-4d38-4991-8b35-b06eec6db41b"}},"namespace":"apnacollege-db2.delete_me","index":"_id_","ident":"index-5b2db2d1-7bcd-403f-b11a-1323a832bced","collectionIdent":"collection-0ee66ef0-48ae-4025-8ea4-c1cbe2c7db4c","commitTimestamp":null}}
mongo-express-1  | POST / 302 46.232 ms - 46
mongo-express-1  | GET / 200 35.556 ms - 10838
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 1.429 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 3.016 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 2.934 ms - -
mongo-express-1  | GET /public/css/style.css 304 2.812 ms - -
mongo-express-1  | GET /public/index-56afe067afbbbde795be.min.js 304 2.704 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 3.311 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.964 ms - -
mongo-express-1  | GET /db/apnacollege-db2/ 200 27.969 ms - 8715
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 2.193 ms - -
mongo-express-1  | GET /public/css/bootstrap.min.css 304 2.218 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 2.211 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 2.383 ms - -
mongo-express-1  | GET /public/css/style.css 304 2.814 ms - -
mongo-express-1  | GET /public/database-5a651a66c59f5316bdde.min.js 304 3.279 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.322 ms - -
mongodb-1        | {"t":{"$date":"2026-03-23T08:21:13.502+00:00"},"s":"I",  "c":"STORAGE",  "id":20320,   "ctx":"conn8","msg":"createCollection","attr":{"namespace":"apnacollege-db2.users","uuidDisposition":"generated","uuid":{"uuid":{"$uuid":"211c41a2-a728-477b-b612-431fc00578e3"}},"options":{}}}
mongodb-1        | {"t":{"$date":"2026-03-23T08:21:13.510+00:00"},"s":"I",  "c":"INDEX",    "id":20345,   "ctx":"conn8","msg":"Index build: done building","attr":{"buildUUID":null,"collectionUUID":{"uuid":{"$uuid":"211c41a2-a728-477b-b612-431fc00578e3"}},"namespace":"apnacollege-db2.users","index":"_id_","ident":"index-056313dd-8c54-4b6d-8c6a-db69ba964d5f","collectionIdent":"collection-6e834519-1cd7-45e4-9f1c-a2d4f4d136b1","commitTimestamp":null}}
mongo-express-1  | POST /db/apnacollege-db2/ 302 28.302 ms - 94
mongo-express-1  | GET /db/apnacollege-db2/users 200 43.127 ms - 17429
mongo-express-1  | GET /public/css/bootstrap.min.css 304 1.615 ms - -
mongo-express-1  | GET /public/css/style.css 304 1.440 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 1.532 ms - -
mongo-express-1  | GET /public/css/theme/rubyblue.css 304 1.893 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 2.614 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 3.339 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.819 ms - -
mongo-express-1  | GET /public/css/codemirror.css 304 0.726 ms - -
mongo-express-1  | GET /public/codemirror-c3ecf01fea09ef4fd0c5.min.js 304 0.742 ms - -
mongo-express-1  | GET /public/collection-70f10ba9e63af80d0f15.min.js 304 0.731 ms - -
mongodb-1        | {"t":{"$date":"2026-03-23T08:22:04.035+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774254124,"ts_usec":35566,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 36, snapshot max: 36 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
mongodb-1        | {"t":{"$date":"2026-03-23T08:23:04.047+00:00"},"s":"I",  "c":"WTCHKPT",  "id":22430,   "ctx":"Checkpointer","msg":"WiredTiger message","attr":{"message":{"ts_sec":1774254184,"ts_usec":47095,"thread":"1:0xffff8431e480","session_name":"WT_SESSION.checkpoint","category":"WT_VERB_CHECKPOINT_PROGRESS","log_id":1000000,"category_id":7,"verbose_level":"INFO","verbose_level_id":0,"msg":"saving checkpoint snapshot min: 37, snapshot max: 37 snapshot count: 0, oldest timestamp: (0, 0) , meta checkpoint timestamp: (0, 0) base write gen: 7"}}}
mongo-express-1  | POST /checkValid 200 30.270 ms - 5
mongo-express-1  | POST /db/apnacollege-db2/users 302 25.224 ms - 94
mongo-express-1  | GET /db/apnacollege-db2/users 200 49.762 ms - 20971
mongo-express-1  | GET /public/css/bootstrap.min.css 304 1.697 ms - -
mongo-express-1  | GET /public/css/bootstrap-theme.min.css 304 1.722 ms - -
mongo-express-1  | GET /public/css/theme/rubyblue.css 304 1.675 ms - -
mongo-express-1  | GET /public/css/codemirror.css 304 1.136 ms - -
mongo-express-1  | GET /public/vendor-93f5fc3ae20e0dfd68cb.min.js 304 1.183 ms - -
mongo-express-1  | GET /public/css/style.css 304 1.597 ms - -
mongo-express-1  | GET /public/img/mongo-express-logo.png 304 0.771 ms - -
mongo-express-1  | GET /public/codemirror-c3ecf01fea09ef4fd0c5.min.js 304 0.584 ms - -
mongo-express-1  | GET /public/collection-70f10ba9e63af80d0f15.min.js 304 1.257 ms - -
mongo-express-1  | GET /public/img/gears.gif 304 0.641 ms - -
v View in Docker Desktop   o View Config   w Enable Watch   d Detach




















(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker volume create myVolume 
myVolume
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker volume ls
DRIVER    VOLUME NAME
local     4ea64f1c6dc77814aa56b81b274027ed9c42ef1387c0d90ceba4c59dcc0527b8
local     6a98a68deffb8bc309743c64065b4153bc4f152eef3e6b3f5bdcd99f5e5d0f5b
local     6f51985e7d4ce2ed59c07cf9edbe9e636c34c5c28d08c907bbbb39c2f0328993
local     7da61ba304c21667d63e019c765d4e570839a4b460dd2e6be2630a2552c31799
local     b2e0ce0f37a96ce749122426d32e1d4bec068ffbf3473de1c3b30c2394efe5af
local     b7ed1951b185396e304b08b36bfcb252659c33cb6e54a826b38d3906e1cc6281
local     ca27ecb6d67a01f07ef44c8404fb7b812846750e470428edbcc9a6755caa37a4
local     cfd051a923ccacc0db1bee8559ab156ba01ee739dadd4e603abeee502e5064d9
local     docker-test-app-2_mongodb_data
local     eaf29684086317c994827143fa25f217ad131de93e9c890d13f319c854e38077
local     ed880fdb91ebf9c97a27a91d5b94257ef8c8511abcc914387d0892dbc67bf572
local     f5155b997615c26d7a215204b04eae110f264ae4bacf34c83b36d505bc80d9f6
local     myVolume
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker volume rm myVolume 
myVolume
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % clear










(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 % docker network ls
NETWORK ID     NAME                        DRIVER    SCOPE
c428a48a37bb   bridge                      bridge    local
ac618c42428e   docker-test-app-2_default   bridge    local
ba7dab1cc941   host                        host      local
89af743a82e9   none                        null      local
(base) abhijayhome@Abhijays-MacBook-Air docker-test-app-2 %      
































































































































