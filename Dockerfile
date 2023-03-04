# Dockerイメージの元となるOfficialイメージをDockerHubより取得(個人PCではarm64のプロセッサ用のイメージを使う)
FROM arm64v8/node:18.14.2
# IntelチップのMacでは以下のFROMコマンドを使う
# FROM node:18.14.2

# Docker内のbackend-graphql-todoで作業をすることを指定（該当のdirectoryが無いときは作成する）
WORKDIR /backend-graphql-todo

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Docker側で必要なパッケージをインストールする
RUN npm install

# ローカルPCの/backend-graphql-todoディレクトリをDocker内の/backend-graphql-todoにコピーする
COPY . .

# Docker側の8080番ポートを使うことを宣言する
EXPOSE 8080