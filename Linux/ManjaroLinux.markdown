# Manjaro Commands

So here’s a list of common commands Majaro uses. This is more for personal use, but I decided to share it because that is the way of Linux

`pacman` aka. your new best friend
Pacman is the package manager for Manjaro, and you would use this to install, manage. or update software

`Sudo` Basic Linux command to run commands.


## Updating

So what I use is

- `pacman-mirrors -g` This creates a query of all the available servers and ranks them via ping so you get the fastest download speed for updates and whatnot.
- `pacman -Syu` This is the command to update all programs

There’s other methods to updating software, this one I prefer. More info on this here <https://forum.manjaro.org/t/tutorial-how-to-fix-slow-update-downloads-speed-in-manjaro-linux/13929>

## use Manjaro installation terminal from Live disk (USB)

Use this for emergencies when you’re locked out of your kernel or something.

Enable root user
`$ sudo su`

Lists Partitions and disks
`$ lsblk -f`

Select Manjaro partition to mount and mount it
`$ sudo mount /dev/sdxx /mnt`

Install `mhwd-chroot`
`$ yaourt mhwd-chroot`

After installation go into your partition
`$ sudo mhwd-chroot /mnt`
