gcc elf.c -o gcc_c_dynsym
gcc -static elf.c -o gcc_c_static
g++ elf.cpp -o gcc_cpp_dynsym
g++ -static elf.cpp -o gcc_cpp_static
#apt install clang libc++dev libc++abi-dev, 苹果认为libstdc++太老了，因此用libc++代替
clang -std=c11 elf.c -o clang_c_dynsym
clang -static -std=c11 elf.c -o clang_c_static
clang++ -std=c++11 -stdlib=libc++ -lc++abi elf.cpp -o clang_cpp_dynsym
#clang++ -static -std=c++11 -stdlib=libc++ -lc++abi elf.cpp -o clang_cpp_dynsym
