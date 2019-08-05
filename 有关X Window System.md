# 有关X Window System

## Linux图形系统

![Linux Graphics Stack](/doc/Linux_kernel_INPUT_OUPUT_evdev_gem_USB_framebuffer.svg)

![Linux Graphics Stack](/doc/Linux_Graphics_Stack_2013.svg)

![Linux Graphics Stack](/doc/1280px-Schema_of_the_layers_of_the_graphical_user_interface.svg.png)

### xorg/x11

### xrdp远程桌面协议
    netstat -nltp | grep xrdp
    tcp        0      0 127.0.0.1:3350          0.0.0.0:*               LISTEN      128106/xrdp-sesman  
    tcp        0      0 0.0.0.0:3389            0.0.0.0:*               LISTEN      128107/xrdp 

    ps aux | grep xrdp
    root     128106  0.0  0.0 210772  3228 ?        Ss   10:54   0:00 /usr/sbin/xrdp-sesman --nodaemon
    root     128107  0.0  0.0 152400  2948 ?        Ss   10:54   0:00 /usr/sbin/xrdp --nodaemon

    systemctl status xrdp
    ● xrdp.service - xrdp daemon
    Loaded: loaded (/usr/lib/systemd/system/xrdp.service; enabled; vendor preset: disabled)
    Active: active (running) since Wed 2019-03-13 10:54:14 CST; 2h 57min ago
        Docs: man:xrdp(8)
            man:xrdp.ini(5)
    Main PID: 128107 (xrdp)
        Tasks: 1
    Memory: 740.0K
    CGroup: /system.slice/xrdp.service
            └─128107 /usr/sbin/xrdp --nodaemon

    Mar 13 11:23:27 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] VNC got clip data
    Mar 13 11:25:22 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] VNC got clip data
    Mar 13 13:26:44 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] VNC got clip data
    Mar 13 13:39:31 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] VNC got clip data
    Mar 13 13:42:48 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] VNC got clip data
    Mar 13 13:43:29 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] Closed socket 12 (AF_INET 10.10.1.10:3389)
    Mar 13 13:43:29 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] xrdp_mm_module_cleanup
    Mar 13 13:43:29 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] VNC mod_exit
    Mar 13 13:43:29 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] Closed socket 19 (AF_INET 127.0.0.1:53696)
    Mar 13 13:43:29 hxslave3 xrdp[129370]: (129370)(140649930103232)[DEBUG] Closed socket 20 (AF_UNIX)

    systemctl status xrdp-sesman
    ● xrdp-sesman.service - xrdp session manager
    Loaded: loaded (/usr/lib/systemd/system/xrdp-sesman.service; disabled; vendor preset: disabled)
    Active: active (running) since Wed 2019-03-13 10:54:14 CST; 2h 59min ago
        Docs: man:xrdp-sesman(8)
            man:sesman.ini(5)
    Main PID: 128106 (xrdp-sesman)
        Tasks: 1
    Memory: 920.0K
    CGroup: /system.slice/xrdp-sesman.service
            └─128106 /usr/sbin/xrdp-sesman --nodaemon

    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: [1962506901]: DEV_REDIR  dev_redir_proc_client_core_cap_resp: 625 : got CAP_DRIVE_TYPE
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: [1962506901]: DEV_REDIR  dev_redir_proc_client_core_cap_resp: 634 : got CAP_SMARTCARD_TYPE
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: xrdp-chansrv [1962506901]: scard_init:
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: chansrv:smartcard_pcsc [1962506901]: scard_pcsc_init:
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: chansrv:smartcard_pcsc [1962506901]: scard_pcsc_init: g_remove_dir failed
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: [1962506902]: DEV_REDIR  devredir_proc_client_devlist_announce_req: 655 : num of devices announced: 1
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: [1962506902]: DEV_REDIR  devredir_proc_client_devlist_announce_req: 707 : device_type=SMARTCARD device_id=0x1 dosname=SCARD
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: [1962506902]: DEV_REDIR  devredir_proc_client_devlist_announce_req: 655 : num of devices announced: 0
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: [20190313-13:43:29] [INFO ] term_signal_handler: got signal 15
    Mar 13 13:43:29 hxslave3 xrdp-sesman[128106]: [20190313-13:43:29] [INFO ] xserver_fatal_handler: entered.......



### vnc远程桌面协议

### TTY系统

![](/doc/TTY1.jpg)

* 真实终端，目前指鼠标、键盘、显示器等
* 虚拟终端-ttyn
  * ttyn<->真实终端，ttyn切换
* 伪终端-ptsn
  * ptsn(master)<->ttyn(slaver)

### 架构

![](https://www.x.org/wiki/guide/xorg.svg)

### 命令
    ps l    #查看所有tty情况，包括pts
    ps      #显示当前终端所持有的tty/pts及进程
    tty     #显示当前终端持有的tty/pts
    lsof /dev/ptmx  #显示打开ptmx设备文件的进程
    pstree -ps pid（Xorg）#显示(Xorg)父进程及其子进程关系
    stty

## 参考
1. [X_Window_System's Wiki](https://en.wikipedia.org/wiki/X_Window_System)
2. [VNC（虚拟网络计算）](https://wiki.centos.org/zh/HowTos/VNC-Server#head-ad2bf6dbb42089715ca5cac7d2129f7bf35747c3)
