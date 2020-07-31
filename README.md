# 有关Linux♔
*-----Linux学习笔记*

## 一、个人学习笔记♨

分类|列表|参考资料|项目及实践
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
引导及Systemd|[Linux引导过程](./Linux引导过程.md)|[SysVinit简体中文](https://wiki.archlinux.org/index.php/SysVinit_(简体中文))|
进程管理|[Linux进程管理](./Linux进程管理.md)|
内存管理|[Linux内存管理](./Linux内存管理.md)|
文件系统|[Linux文件系统](./Linux文件系统.md)|
网络管理|[Linux网络管理](./Linux网络管理.md)| | 优秀项目<br>[aria2](https://github.com/aria2/aria2)、[netwox](https://github.com/yejinlei/netwox)、[ivre](https://github.com/cea-sec/ivre)、[NetworKit](https://github.com/networkit/networkit)、[frp](https://github.com/axel-download-accelerator/axel)
设备管理|[Linux设备管理](./Linux设备管理.md)|
虚拟化技术|1.[Linux虚拟化技术](./Linux虚拟化技术.md)<br>2.[有关Qemu](./有关Qemu.md)|
容器及运维|[Linux容器及编排技术](./Linux容器及编排技术.md)<br>|
性能优化|[Linux性能优化及跟踪](./Linux性能优化及跟踪.md)|
系统编程|[Linux模块编程](./Linux模块编程.md)|
C及SHELL编程|1.[Linux Shell编程](./Linux—Shell编程.md)<br>2.[有关LLVM编译器](https://github.com/yejinlei/about-compiler/blob/master/有关LLVM.md)<br>3.[GIT版本控制](https://github.com/yejinlei/about-git)|

## 二、有关Linux内核原理及思维导图♨

<details><summary>linux kernel map</summary>

![linux kernel map](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Linux_kernel_map.png/800px-Linux_kernel_map.png)

</details>

<details><summary>linux storage stack diagram</summary>

![linux storage stack diagram](https://upload.wikimedia.org/wikipedia/commons/3/30/IO_stack_of_the_Linux_kernel.svg)

</details>

</details>

<details><summary>protocols</summary>

![](doc/protocols.png)

</details>

## 三、相关主题♨

### ✔ docker容器

### ✔ kubernetes运维

### ✔ service mesh服务网格

### ✔ kvm/xen/qemu虚拟化

### ✔ serverless无服务化

### ✔ openstack私有云

### ✔ sdn软件定义网络

### ✔ 龙芯

#### 龙芯CPU

#### 龙芯OS

#### 龙芯编译器链

## 四、开源项目♨
- [bpftools/linux-observability-with-bpf](https://github.com/bpftools/linux-observability-with-bpf)
- [iovisor/bcc](https://github.com/iovisor/bcc)，eBPF 工具集 bcc-tools，ubuntu 下叫 bpfcc-tools
- [tutorial_bcc_python_developer](https://github.com/iovisor/bcc/blob/master/docs/tutorial_bcc_python_developer.md)，教程：使用Pyhton开发bcc工具
- [iovisor/bpftrace](https://github.com/iovisor/bpftrace)，eBPF 前端工具
- [iovisor/ply](https://github.com/iovisor/ply)，eBPF 前端工具
- [cilium/cilium](https://github.com/cilium/cilium)，基于 BPF 用于容器的关键网络技术

## 五、Linux大神博客及社区
- [Linux性能优化大神-Brendan D. Gregg](http://www.brendangregg.com/bpf-performance-tools-book.html)
- [Service Mesh Community](https://github.com/servicemesher)
	- [主页](https://www.servicemesher.com)
	- [深入了解Cilium多集群](https://www.servicemesher.com/blog/deep-dive-into-cilium-multi-cluster/)
	- [Istio 知识图谱](https://github.com/servicemesher/istio-knowledge-map)

## 五、资料♨
- [The Linux Kernel HOWTO](http://www.faqs.org/docs/Linux-HOWTO/Kernel-HOWTO.html)
- UNIX Linux系统管理技术手册（第4版）
- Linux命令行与Shell脚本编程大全
- 《30天自制操作系统》
- [6.828: Operating System Engineering](https://pdos.csail.mit.edu/6.828/2011/schedule.html)
- [JamesM's kernel development tutorials](http://johnvidler.co.uk/mirror/jamesm-kernel-tutorial/tutorial_html/)
- [x86架构操作系统内核的实现 online](http://wiki.0xffffff.org/),[download](https://github.com/hurley25/Hurlex-II)
- [hurlex 项目的完整开发文档](http://hurlex.0xffffff.org/)
- [OSDev.org](http://wiki.osdev.org/Main_Page)
- [Xv6, a simple Unix-like teaching operating system](https://pdos.csail.mit.edu/6.828/2012/xv6.html)
- [How-to-Make-a-Computer-Operating-System](https://github.com/SamyPesse/How-to-Make-a-Computer-Operating-System)
- [TedkOS](https://github.com/TakefiveInteractive/TedkOS)
- [FreeNOS](https://github.com/lordsergio/FreeNOS)
- [Bran's Kernel Development Tutorial](http://www.osdever.net/bkerndev/Docs/gettingstarted.htm)
- [基于 Bochs 的操作系统内核实现](http://fleurer-lee.com/paper.html)
- [ranxian/xv6-chinese · GitHub](https://github.com/ranxian/xv6-chinese)
- [从无到有编写一个OS内核](http://www.ilovecl.com/2015/09/15/os_redleaf/)
- [Operating System Development Series](http://www.brokenthorn.com/Resources/OSDevIndex.html)
- [Ribose Yim's Tech Blog - How Linux Works](https://riboseyim.com/2019/04/21/Linux-Works)
- [龙芯开源社区ftp](http://mirrors.loongnix.org/)
- [debian‘s qemu镜像](https://people.debian.org/~aurel32/qemu/)
- [qemu下载](https://download.qemu.org/)
- [网络相关库及项目](https://www.oschina.net/project/tag/145/networklib)
- [eBPF 简史](https://www.ibm.com/developerworks/cn/linux/l-lo-eBPF-history/index.html)
- [BPF Performance Tools](https://share.weiyun.com/s8atvC4K)
- [inux Performance Tools](https://share.weiyun.com/6NZaCas6)
- [LSFMM2019 BPF Observability](https://share.weiyun.com/d5U3P2sF)
- [KVM详解](http://blog.chinaunix.net/uid-22964557-id-5769478.html)
- [台湾chenwj's qemu](https://people.cs.nctu.edu.tw/~chenwj/dokuwiki/doku.php?id=qemu)