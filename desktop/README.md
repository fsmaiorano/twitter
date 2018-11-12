# Twitter Desktop

:warning: Launch the backend application before running this project.

### Prerequisites

:warning: This project need of NodeJS installed. If you wish use Yarn, install these too.

### Installing

Install all dependecies. Execute the below command inside of each directory.

```
$ yarn or npm install

```

## Development

Execute the script:

```
$ yarn start
```

and

```
$ yarn electron-dev (for Linux and MacOS users) or electron-dev-windows (for Windows users)
```

## Deployment

Build all Platforms

```
$ yarn build:electron:all

```

Build for Windows

```
$ build:electron:windows": "yarn build && electron-builder --windows
```

Build for Linux

```
$ build:electron:linux": "yarn build && electron-builder --linux
```

Build for MacOS

```
$ build:electron:osx": "yarn build && electron-builder --macos
```

After build process, the executables can be find in dist directory

## License

:free:
