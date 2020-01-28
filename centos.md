# centos #

## centos6.5 minimal 基本环境配置 ##
	1. 启动网卡
		1. vi /etc/sysconfig/network-scripts/ifcfg-eth0 ONBOOT=no 改为 yes
		1. service network restart 重启网络
	1. 配置sshd
		1. 在/etc/hosts.deny和/etc/hosts.allow加上sshd:ALL
		2. service sshd restart
	1. 关闭selinux
		1. vi /etc/selinux/config，SELINUX=enforcing改成SELINUX=disabled
		2. reboot
	1. 配置yum源
		1. yum -y install wget
		2. cd /etc/yum.repos.d/
		3. wget http://mirrors.163.com/.help/CentOS6-Base-163.repo
		4. yum clean all
		5. yum makecache
		6. yum update

## 有关rpm ##
	- 查看依赖
		
		rpm -q --requires
	
	- 查看文件的提供者
	
		rpm -qf
	
	- 查看安装位置
	
		rpm -ql
	
	- 提取文件
		1. rpm2cpio test.rpm > test.cpio
		1. cpio -i --make-directories < test.cpio  

## 有关yum ##
	- /usr/bin/yum
	
		python脚本，默认使用python2.6	
	
	- yum repolist
		
		显示所有源/仓库列表，实际存放在/etc/yum.repos.d/目录中

	- 查看指定仓库的软件包

		yum --disablerepo="*" --enablerepo="elrepo-kernel" list available #屏蔽所有的仓库，只显示elrepo-kernel
	
	- 安装epel第三方源
	
	    CentOs 5.x，rpm -Uvh http://mirror.webtatic.com/yum/el5/latest.rpm
	
		CentOs 6.x，rpm -Uvh http://mirror.webtatic.com/yum/el6/latest.rpm
	
		CentOs 7.X，rpm -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm;
					rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm
	
	- 手工替换，阿里云源替换CentOS-Base.repo
		
		mv CentOS-Base.repo CentOS-Base.repo.old
		wget http://mirrors.aliyun.com/repo/Centos-7.repo
		mv Centos-7.repo CentOS-Base.repo
		yum update -y

## 安装X Windows System 
	yum groupinstall "X Window system"

## 安装Gnome
	yum -y groupsinstall "GNOME Desktop"  #or
	yum -y groupinstall "Server with GUI"

## 安装kde
	yum -y groupsinstall "KDE Plasma Workspaces"

## 安装xfce4
	yum install epel-release
	yum -y groupinstall Xfce

## xrdp协议远程登陆
	yum install epel* -y
	yum --enablerepo=epel -y install xrdp
	yum install vnc4server tightvnc-server
	systemctl start xrdp
	systemctl enable xrdp
	netstat -tnlp | grep xrdp	#检查xrdp是否开启
	
	vim ~/.Xclients
	---------------
	#!/bin/bash
	XFCE="$(which xfce4-session 2>/dev/null)"
	exec "$XFCE"
	---------------
	chmod +x ~/.Xclients
	systemctl restart xrdp

## 安装vnc服务器
	yum -y install tigervnc-server

## 源码安装git
	1. yum remove git
	2. yum install curl curl-devel #必须安装的依赖库
	3. wget https://github.com/git/git/archive/v2.19.1.tar.gz
	4. tar zxvf v2.19.1.tar.gz
	5. cd git-2.19.1
	6. make configure
	7. ./configure --prefix=/usr/local/git --with-iconv=/usr/local/libiconv
	8. make all doc #可能需要asciidoc、zlib-devel、xmlto
	9. sudo make install install-doc install-html
	10. sudo vim /etc/profile
	11. export PATH=/usr/local/git/bin:$PATH
	12. source /etc/profile

## 源码安装cmake
	1. yum install gcc gcc-c++ ncurses-devel perl
	2. wget https://cmake.org/files/v3.3/cmake-3.3.2.tar.gz
	3. tar zxvf cmake-3.3.2.tar.gz
	4. cd cmake-3.3.2
	5. ./configure
	6. make && make install

## 安装Pyenv
	yum install readline readline-devel readline-static -y
	yum install openssl openssl-devel openssl-static wget curl llvm make build-essential -y
	yum install sqlite-devel bzip2-devel bzip2-libs git gcc-c++ libc6-dev gcc -y
	yum install libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev -y
	
	# 开始安装pyenv
	git clone git://github.com/yyuu/pyenv.git ~/.pyenv
	echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
	echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
	echo 'eval "$(pyenv init -)"' >> ~/.bashrc
	exec $SHELL -l
	
	# 注意:考虑到多用户通用性,可考虑改成如下脚本:
	git clone git://github.com/yyuu/pyenv.git /opt/.pyenv
	echo 'export PYENV_ROOT="/opt/.pyenv"' >> /etc/bashrc
	echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> /etc/bashrc
	echo 'eval "$(pyenv init -)"' >> /etc/bashrc
	exec $SHELL -l

## 安装python3及Pip
	yum groupinstall "Development tools"
	yum install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
	pyenv install -v 3.6.0
	wget https://bootstrap.pypa.io/get-pip.py
	python34 get-pip.py #安装对应版本pip

## docker容器相关
	#安装docker-ce
	yum update
	#yum list installed | grep docker
	yum remove docker  docker-common docker-selinux docker-engine
	yum install -y yum-utils device-mapper-persistent-data lvm2
	yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
	#yum list docker-ce --showduplicates | sort -r
	yum -y install docker-ce-19.03.5-3.el7
	systemctl start docker
	systemctl enable docker
	docker version
	yum -y install python3-pip.noarch
	pip3 install docker-compose

    #安装docker-compse，用于编排
	pip install docker-compose #安装docker-compose编码工具

	#安装dfimage，用于Image to Dockefile	
	alias dfimage="docker run -v /var/run/docker.sock:/var/run/docker.sock --rm chenzj/dfimage"
	dfimage image_id


## rpm安装ffmpeg
	1. yum localinstall --nogpgcheck https://download1.rpmfusion.org/free/el/rpmfusion-free-release-6.noarch.rpm
	1. yum -y install ffmpeg ffmpeg-devel

## 安装vlc
	http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-5.el7.nux.noarch.rpm
	yum install vlc

## 升级内核(源码升级)

## 升级内核(yum升级)
	1. uname -r
	1. yum update nss #如果出现curl: (35) SSL connect error
	1. rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
	1. rpm -Uvh http://www.elrepo.org/elrepo-release-6-8.el6.elrepo.noarch.rpm #参考：http://elrepo.org/tiki/tiki-index.php 根据系统版本选择el源
	1. yum --enablerepo=elrepo-kernel install kernel-lt -y #或者安装kernel-ml（ml=mainline），yum --enablerepo=elrepo-kernel install kernel-ml -y
	1. vim /etc/grub.conf，修改default=0