/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents()
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('chcp_updateInstalled', this.updateInstalled, false);
    },
    updateInstalled: function() {
        window.alert('已经更新就绪');
    },
    onDeviceReady: function() {
        document.addEventListener('deviceready', () => {
            let chcp = window.chcp;
            // 检测更新
            chcp.fetchUpdate((error, data) => {

                // 表示没有更新版本，或者其他错误，详情的信息参考上面的chcp error链接
                if (error) {
                    console.log('--fetchUpdate error--', error.code, error.description);
                    return;
                }

                // 这次更新的版本信息
                console.log('--fetchUpdate--', data, data.config);
                // 检测是否是否可以进行安装了，双重判断吧，有时候会出现有更新版本但是暂时无法安装的情况（也可以去掉这一层）
                chcp.isUpdateAvailableForInstallation((error, data) => {

                    if (error) {
                        console.log('No update was loaded => nothing to install');
                    } else {
                        // 询问用户是否更新
                        if ( window.confirm('检测到新版本，是否更新') ) {
                            // 更新中
                            chcp.installUpdate((error) => {
                                if (error) {
                                    // 更新失败
                                    console.log('Failed to install the update with error code: ' + error.code);
                                    console.log(error.description);
                                } else {
                                    // 更新成功
                                    console.log('Update installed!');
                                }
                            });
                        } else {
                            window.alert('您已拒绝更新');
                        }

                        // 对比版本号
                        console.log('Current content version: ' + data.currentVersion);
                        console.log('Ready to be installed:' + data.readyToInstallVersion);
                    }

                });
            });
        });
        this.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
