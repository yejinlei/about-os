axel -n 16 https://openresty.org/download/openresty-1.17.8.2.tar.gz 
tar -zxvf openresty-1.17.8.2.tar.gz && cd openresty-1.17.8.2
./configure --with-luajit --with-pcre --with-http_ssl_module --with-http_iconv_module --with-http_v2_module --with-http_realip_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_auth_request_module --with-http_secure_link_module --with-http_stub_status_module --with-http_addition_module \
--with-openssl="../openssl-1.1.1g/" \
--with-cc-opt="-I/usr/local/opt/openssl/include/ -I/usr/local/opt/pcre/include/" \
--with-ld-opt="-L/usr/local/opt/openssl/lib/ -L/usr/local/opt/pcre/lib/"
make -j8
