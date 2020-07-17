# Linux性能优化及跟踪 #

> **性能工具及组件、底层机制**
![](doc/perf/perf-tools-components-architecture.png)<br>from [mmi.hatenablog.com](http://mmi.hatenablog.com)

> **性能工具**
![](doc/perf/linux_observability_tools.png)<br>from [www.brendangregg.com](http://www.brendangregg.com)

![](doc/LPB.jpg)

![](doc/LPT.jpg)

> **性能事件源**
![](doc/perf/perf_events_map.png)<br>from [www.brendangregg.com](http://www.brendangregg.com)


## 进程相关
- top命令
	
	![](doc/top.PNG)

	1. 20:37:38是当前时间，up 2:20是系统运行多长时间，2 users指出当前用户登录数，load average指出系统负载，三个值分别是1分钟，5分钟，15分钟的系统负载平均值；（等同于uptime）
	2. Task指出了当前系统有多少个进程，以及各种状态的进程统计信息
	3. %Cpu(s)，代表了CPU占用比例
	
		>us用户模式 sy系统模式 ni优先值 id空闲CPU百分比 wa等待输入输出CPU事件百分比 hi中断 si软中断 st？
	4. 物理内存信息
	5. 交换内存信息
	6. 
		- PID 进程的PID
		- USER 用户名，任务属主
		- PR 任务的优先级
		- NI 优先值
		- VIRT 虚拟映像（kb），任务当前使用的虚拟内存数量
		- RES 常驻物理内存占用量，RES=CODE+DATA
		- SHR 共享内存大小（kb）
		- S 进程状态（D-不可中断的睡眠，R-运行，S-睡眠，T-停止，Z-僵尸进程）
		- %CPU CPU使用量
		- %MEM 内存使用量
		- TIME+ CPU时间，百分之一
		- COMMAND 程序名称

- ps命令

- pgrep命令，根据名称或者其它属性查询进程信息
	
	![](doc/pgrep.PNG)

- pstack命令，显示进程的栈跟踪信息
	
	![](doc/pstack.PNG)

- strace命令，跟踪系统调用
	
	![](doc/strace.PNG)

	    -p pid,直接attach上去跟踪
	    -e open,futex等，过滤指定系统调用
	    -c，统计系统调用

## 网络相关
- nc命令，用于创建任意的TCP/UDP连接或者是监听连接
	
	![](doc/nc.PNG)
			
		#传递文件
		server: nc -l 8888 > filename.out
		client: nc ip 8888 < filename.in

		#传递整个目录
		server： nc -l 8888 | tar zxvf -
		client： tar zcvf - dirname |nc server 8888
				
		#模拟http请求
		echo -n "GET / HTTP/1.0\r\n\r\n" | nc webserver 80

		#扫描端口
		nc -z server 1-100

- ss命令，显示socket的统计信息

	![](doc/ss.PNG)

## 高级性能分析和诊断工具

![](doc/tracer.png)
### ftrace

1. 实现原理
	- ftrace\_init初始化
	- \_\_ftrace\_replace_code

1. 资料
	1. Ftrace文档：Documentation/trace/ftrace.txt和ftrace-design.txt
	2. [Ftrace简介](http://www.ibm.com/developerworks/cn/linux/l-cn-ftrace/)
	3. [使用ftrace调试Linux内核](http://www.ibm.com/developerworks/cn/linux/l-cn-ftrace1/)

### perf

1. 安装 
  sudo apt-get install perf-tools-unstable linux-tools-$(uname -r) linux-cloud-tools-$(uname -r)

### 资料
1. [Exploring USDT Probes on Linux](https://leezhenghui.github.io/linux/2019/03/05/exploring-usdt-on-linux.html)
2. [Linux 系统动态追踪技术介绍](https://blog.arstercz.com/introduction_to_linux_dynamic_tracing/)
3. [Brendan Gregg' Blog - perf Examples](http://www.brendangregg.com/perf.html#SoftwareEvents)
4. [Brendan Gregg' Blog - Linux uprobe: User-Level Dynamic Tracing](https://webrtc.org.cn/webrtc-tutorial-1-setup-signaling/)
5. [玩转 utrace](https://www.ibm.com/developerworks/cn/linux/l-cn-utrace/)
6. [Ftrace 实现原理与开发实践](http://tinylab.org/ftrace-principle-and-practice/)
7. [ftrace 中 eventtracing 的实现原理](https://www.ibm.com/developerworks/cn/linux/1609_houp_ftrace/)
8. [使用 ftrace 跟踪内核](https://linux.cn/article-9838-1.html)