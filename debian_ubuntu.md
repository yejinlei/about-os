# debian/ubuntu

## 查看内核及版本信息
lsb_release
cat /etc/issue
cat /etc/debian_version
uname -r

## 安装xfce4

	apt-get install xfce4 xfce4-goodies #xfce4-goodies包含了很多xfce4-*的包
	update-alternatives --config x-session-manager #切换界面

## 设置apt源
- debian(stretch)

		修改/etc/apt/sources.list
		deb http://mirrors.163.com/debian/ stretch main non-free contrib
		deb http://mirrors.163.com/debian/ stretch-updates main non-free contrib
		deb http://mirrors.163.com/debian/ stretch-backports main non-free contrib
		deb-src http://mirrors.163.com/debian/ stretch main non-free contrib
		deb-src http://mirrors.163.com/debian/ stretch-updates main non-free contrib
		deb-src http://mirrors.163.com/debian/ stretch-backports main non-free contrib
		deb http://mirrors.163.com/debian-security/ stretch/updates main non-free contrib
		deb-src http://mirrors.163.com/debian-security/ stretch/updates main non-free contrib

- ubuntu(bionic)

		deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
		deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
		deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
		deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
		deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
		deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
		deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
		deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
		deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
		deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

## 设置系统语言及字体
	aptitude install locales
	dpkg-reconfigure locales 进入选择： zh_CN.*, en_US.UTF8
	设置/etc/default/locale，LANG=en_US.UTF-8, LANGUAGE=zh_CN.UTF-8影响菜单、快捷图标
	#apt-get install ttf-arphic-uming 
	apt-get install xfonts-intl-chinese
	apt-get install xfonts-wqy
	apt-get install ttf-wqy-zenhei

## 安装输入法
	apt-get install ibus ibus-pinyin ibus-sunpinyin
	ibus-setup

## 切换鼠标左右键
	xmodmap -e "pointer = 3 2 1"

## 安装C语言开发包
	apt-get install build-essential

## 设置pip源
	~/.pip/pip.conf
	[global]
	timeout = 6000
	index-url = https://pypi.tuna.tsinghua.edu.cn/simple
	trusted-host = pypi.tuna.tsinghua.edu.cn


## 安装vscode

 	add-apt-repository ppa:ubuntu-desktop/ubuntu-make
    apt-get update
    apt-get install ubuntu-make
    umake ide visual-studio-code

##  安装chromium浏览器
	apt-get install chromium-browser

## 安装docker及工具
- debian(stretch)
	
		1. wget -qO- https://get.docker.com | sh #curl -fsSL https://get.docker.com/ | sh 或 curl -sSL https://get.daocloud.io/docker | sh
		2. apt-get install docker-compose

- ubuntu(bionic)
	
		1. echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" > /etc/apt/source.list.d/docker.list
		2. curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
		3. sudo apt-get install docker-ce
