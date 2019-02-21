## Get Started

### Setup

```bash
# if Node is not installed
brew install node
# if yarn is not installed
npm i -g yarn
```

```bash
git clone https://github.com/ozaki25/control-ec2-client.git
cd control-ec2-client
yarn
```

### Run

- set endpoint

```bash
touch .env
```

- write endpoint url in `.env`

```
REACT_APP_API=https://xxxx/
```

- start app

```bash
yarn start
# open http://localhost:3000
```
