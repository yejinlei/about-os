sudo callgraph -f thread -F "error_report assert strcmp strncmp strlen printf error_printf exit abort qemu_opt_get qemu_opt_set qemu_find_opts qemu_opts_create strerror qemu_opt_get_number error_report_err memset g_free dup strtok g_strdup strstart snprintf sscanf fprintf hw_error CPU_FOREACH g_malloc0 perror" -b firefox -d cpus.c

