{ pkgs, ... }:
{
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # Or "unstable"
  # Use https://search.nixos.org/packages to find packages.
  packages = [
    pkgs.nodejs_20
    pkgs.nodePackages.http-server
  ];
  # Sets environment variables in the workspace.
  env = {};
  # Fast way to run binaries inherited from `pkgs`
  # Run `hello` in the terminal to see this in action.
  # startup = {
  #   # This part runs every time the workspace starts
  #   command = [ "hello" ];
  # };

  # To get started with a project, check out https://idx.dev/templates
}