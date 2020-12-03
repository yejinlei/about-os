mkdir third && cd third
axel -n 16 https://www.openssl.org/source/old/1.1.1/openssl-1.1.1g.tar.gz && tar -zxvf openssl-1.1.1g.tar.gz
axel -n 16 https://ftp.pcre.org/pub/pcre/pcre-8.13.tar.gz && tar -zxvf pcre-8.13.tar.gz
git clone --recursive https://gitee.com/yejinlei-mirror/nginx-http-flv-module .
cd ..
axel -n 16 https://openresty.org/download/openresty-1.17.8.2.tar.gz && tar -zxvf openresty-1.17.8.2.tar.gz
cd openresty-1.17.8.2
./configure --prefix=../build \
--user=www \
--group=www \
--with-luajit \
--with-http_ssl_module \
--with-http_iconv_module \
--with-http_v2_module \
--with-http_realip_module \
--with-http_sub_module \
--with-http_flv_module \
--with-http_mp4_module \
--with-http_gunzip_module \
--with-http_gzip_static_module \
--with-http_auth_request_module \
--with-http_secure_link_module \
--with-http_stub_status_module \
--with-http_addition_module \
--add-module="../third/nginx-http-flv-module/" \
--with-openssl="../third/openssl-1.1.1g/" \
--with-pcre="../third/pcre-8.13/" \
--with-cc-opt="-I../third/openssl-1.1.1g/include/ -I../third/pcre-8.13/include/" \
--with-ld-opt="-L../third/openssl-1.1.1g/lib/ -L../third/pcre-8.13/lib/" && make -j8 && make install
