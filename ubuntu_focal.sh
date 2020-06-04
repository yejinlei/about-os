#zsh,oh-my-zsh
apt -y zsh apt-transport-https ca-certificates curl gnupg-agent software-properties-common
chsh -s /bin/zsh
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh}/plugins/zsh-autosuggestions
apt install -y autojump
echo 'plugins=(git autojump zsh-syntax-highlighting zsh-autosuggestions)' >> ~/.zshrc
source ~/.zshrc

#docker-ce
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt update
apt install docker-ce docker-ce-cli containerd.io python3-pip docker-compose

#fd
axel -n 8 https://github.com/sharkdp/fd/releases/download/v7.3.0/fd-musl_7.3.0_amd64.deb
dpkg -i fd-musl_7.3.0_amd64.deb

#pyenv for python
apt install -y build-essential libbz2-dev libssl-dev libreadline-dev libsqlite3-dev tk-dev
curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | zsh
echo 'export PATH=~/.pyenv/bin:$PATH' >> ~/.zshrc
echo 'export PYENV_ROOT=~/.pyenv' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc

#gvm for go
sudo apt-get install -y curl git mercurial make binutils bison gcc build-essential　
zsh < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
source ~/.gvm/scripts/gvm

#sdkman for java
curl -s "https://get.sdkman.io" | zsh
source ~/.sdkman/bin/sdkman-init.sh

#jetbrains
axel -n 32 https://download.jetbrains.com/toolbox/jetbrains-toolbox-1.17.7005.tar.gz?_ga=2.26479098.696954856.1591014660-146187010.1591014660
tar -zxvf jetbrains-toolbox-1.17.7005.tar.gz

#chrome
axel -n 32 https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb 
dpkg -i google-chrome-stable_current_amd64.deb 

apt-get install libgstreamer1.0-dev gstreamer1.0-tools gstreamer1.0-doc
apt-get install gstreamer0.10-plugins-base gstreamer0.10-plugins-good gstreamer0.10-plugins-ugly gstreamer0.10-plugins-bad gstreamer0.10-plugins-bad-multiverse

#yEd
axel -n 32  https://www.yworks.com/resources/yed/demo/yEd-3.20_with-JRE8_64-bit_setup.sh && chmod +x ./yEd-3.20_with-JRE8_64-bit_setup.sh && ./yEd-3.20_with-JRE8_64-bit_setup.sh

#xmind
axel -n 32 https://dl2.xmind.cn/xmind-8-update9-linux.zip && unzip xmind-8-update9-linux.zip

#other
apt install -y git tmux vim htop axel vlc
