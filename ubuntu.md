# Ubuntu
	sudo cp /etc/apt/sources.list /etc/apt/sources.listbak
	sudo echo "deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse" > /etc/apt/sources.list
	sudo echo "deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse" >> /etc/apt/sources.list
	sudo echo "deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse" >> /etc/apt/sources.list
	sudo apt update
	sudo apt install -y tumx zsh git tig curl htop glances ncdu

	#安装oh-my-zsh插件
	wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
	chsh -s /usr/bin/zsh
	sudo apt-get install autojump
	echo "plugins=(git autojump)" >>  ~/.zshrc
	source ~/.zshrc

	#安装python版本管理工具pyenv
	curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | zsh
	sudo echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
	sudo echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
	sudo echo 'eval "$(pyenv init -)"' >> ~/.zshrc
	source ~/.zshrc
	
	#安装golang版本管理工具gvm
	zsh < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
	
  #安装nodejs版本管理工具nvm
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | zsh

	#安装R及R Studio Server
	sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
	sudo add-apt-repository 'deb https://cloud.r-project.org/bin/linux/ubuntu bionic-cran35/'
	sudo apt update
	sudo apt install r-base r-base-dev
	wget https://download2.rstudio.org/rstudio-server-1.1.383-amd64.deb
	sudo dpkg -i rstudio-server-1.1.383-amd64.deb
	sudo systemctl enable rstudio-server.service
	sudo systemctl start rstudio-server.service
	sudo rstudio-server start #ip:8787

	#安装xfce4
	sudo apt-get install xubuntu-desktop

	#安装ssh及配置x11 forward ssh
	sudo apt install -y openssh-server openssh-client xauth
	sudo systemctl enable ssh.service
	sudo systemctl start ssh.service
	#/etc/ssh/sshd_config
		AllowTcpForwarding yes
		X11Forwarding yes
	#/etc/ssh/ssh_config
		ForwardAgent yes
		ForwardX11 yes
		ForwardX11Trusted yes
	
	

	
