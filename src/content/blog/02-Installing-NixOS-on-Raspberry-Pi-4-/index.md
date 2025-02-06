---
title: Headless NixOS install on Raspberry Pi 4
summary: We'll use an external SSD and partition with ZFS encryption
date: Feb 4 2025
draft: true
tags:
  - NixOS
---

### Backstory
Installing NixOS on the Raspberry Pi is surprisingly hard. Normally, with the likes of Ubuntu or the official Raspberry Pi OS, you would just flash the corresponding image to the SD Card and be done with it. Well, when I tried to set up my own Homelab on my Pi, this didn't work so well...

Today I am going to walk you through a headless NixOS install.

### Requirements
You will need:
- Raspberry Pi 4B (4+ GB of RAM recommended)
- Power cable with sufficient output (5V/3A) for RP4
- A separate machine for partitioning and flashing of the OS image with `nix` installed
- An external SSD with USB connectivity

### Get the Image
All packages and deployments for Nix are built by Hydra, a Continuous Integration service. Let's download and decompress the official aarch64 image for our Raspberry Pi:

```sh
# Download necessary tools
nix-shell -p wget zstd

# Latest successful build
wget -O - https://hydra.nixos.org/job/nixos/trunk-combined/nixos.sd_image.aarch64-linux/latest-finished/download-by-type/file/sd-image | unzstd -d -o pi-sd-image.img

# Specific build (the one I used)
wget -O - https://hydra.nixos.org/build/287521348/download/1/nixos-image-sd-card-25.05beta747070.c6e957d81b96-aarch64-linux.img.zst | unzstd -d -o pi-sd-image.img
```
If you want to target a specific build (f.e. if the latest image fails for some reason), go to [Hydra](https://hydra.nixos.org/job/nixos/trunk-combined/nixos.sd_image.aarch64-linux), select the build that you want and copy the link to the image in the *Build products* section. Then just replace the URL above and proceed.

Now use a tool like [Etcher](https://www.balena.io/etcher/) or [Impression](https://apps.gnome.org/Impression/) to flash the image to the SSD. Doing this operation with a GUI reduces the chances of accidentally formatting the wrong disks...
Alternatively, identify the disk you want to flash the image to (be careful!), and run the following command, replacing `sdX` with the identified target disk:
```sh
sudo dd if=pi-sd-image.img of=/dev/sdX bs=4096 conv=fsync status=progress
```

If the image doesn't boot, [update the firmware](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#bootloader_update_stable) and try again!

### Partitioning
Make sure the external SSD is connected to 
Let's start clean:
```sh
sudo wipefs -f /dev/sda
```

### Sources
- https://thehellings.com/posts/nixos-on-raspberry-pi-4/
- https://nix.dev/tutorials/nixos/installing-nixos-on-a-raspberry-pi
- https://discourse.nixos.org/t/build-raspberry-image-with-preinstalled-software/33055
