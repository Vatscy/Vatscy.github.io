# Git Memo

## Commands

### git init

`git init`  
git管理を開始する。

### git status

`git status`  
変更されたファイルを表示する。

### git diff

`git diff ファイル名`  
対象のファイルの変更内容を確認する。

### git add

`git add ファイル名1 ファイル名2 ...`  
指定したファイルをステージングする。

`git add .`  
変更のあるファイルを一括ステージングする。  
新規作成されたファイルも含む。

### git commit

`git commit`  
ステージングされた変更を保存（コミット）する。  
Vimが起動し、コミットコメントを記述する。

`git commit -m "コミットコメント"`  
コミットコメントを指定してコミットする。

`git commit -a`  
変更されたファイルを自動検出してステージングした後にコミットする。  
ただし、新規作成されたファイルは対象外。

`git commit --amend`  
今回の変更を前回のコミットに含める。

### git log

`git log`  
コミットログを表示する。

### git config

`git config --global user.name "ユーザ名"`  
ユーザ名を設定する。

`git config --global user.email "メールアドレス"`  
メールアドレスを設定する。

`git config --global color.ui auto`  
gitコマンドを使用する際に色が付き分かり易くなる。
