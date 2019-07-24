# 中级题目

重构[exam-intermediate.js](https://github.com/FEMessage/hire/blob/master/exam-intermediate.js)


## 说明

上面的文件是针对某个服务封装的 SDK，功能可用，但使用很不友好，且有很多重复代码。

请根据自己的代码审美能力，以及技术品味，动手重构这份js文件。


要求：

1. 能真实发送邮件，相关资料请参考[教程](https://www.yuque.com/deepexi-serverless/rglgis/rq1nva)
1. 增强可读性（请取有意义的变量名，我们对变量的命名是经过反复斟酌的）
1. 提高可维护性（减少重复代码，让以后更方便添加新功能）
1. 提高易用性（让别人使用这个SDK更方便，不容易出错；尽可能的减少入参）
1. 添加单元测试（框架不限，推荐使用[jest](https://femessage.github.io/blog/docs/tutorial/test-driven-development-by-jest.html)）
1. 请求库替换成axios
1. 使用 [codacy](https://codacy.com) 对自己的代码进行质量评估，至少要 B 以上, issue 要少于 10 个

<details>
  <summary></summary>
  <p>
    还有一点就是，看到这个js在使用callback，是不是有点别扭？
  </p>
</details>

这里的要求只能详细到这种程度了，因为这就是要测试你内在的素养、实际工作中的编码能力，如果不能自主地写出整洁的代码，会让其他团队成员很难受的。

这道题并非做出来了就算是通过了，我们会有审核标准，在收到邮件查阅代码后，我们会指出是否达到要标准。

