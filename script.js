// ===== 简历数据 =====

// 教育背景
const educationDetail = {
    period: '2021-09~2025-07',
    school: '中北大学',
    degree: '（全日制统招一本）',
    rank: '专业成绩：专业前 20%',
    awards: '曾获多次奖学金'
};

// 专业技能
const skillsDetail = [
    { text: '拥有一年以上Java后端开发经验，具备扎实的Java基础，了解常用集合框架的底层实现原理。' },
    { text: '熟悉Java并发编程，对悲观锁、乐观锁原理以及使用场景有自己的思考，熟悉线程池执行原理理解核心参数，具有参数调优经验' },
    { text: '熟悉常用设计模式，可以在项目中根据业务场景使用合适的设计模式，如：模板方法、简单工厂，代理模式等' },
    { text: '熟悉JVM内存模型，JVM垃圾回收机制，了解类加载过程，GC调优。' },
    { text: '熟悉Mysql数据库，了解MySQL索引原理和优化、熟悉MySQL优化工作、事务隔离级别，了解Mysql日志，Mysql高可用等。' },
    { text: '熟悉Spring、SpringBoot、MyBatis等主流开发框架，熟悉IOC和AOP应用和常用注解的使用。' },
    { text: '熟悉Redis的使用，熟悉使用Redis的五种数据类型，了解Redis持久化方案，了解Redis常见线上问题，如：缓存雪崩、缓存穿透、缓存击穿。' },
    { text: '熟悉常见的数据结构：数组、链表、栈、队列等；了解常见的算法：排序、查找、递归等。' },
    { text: '会使用k8s部署ELK做日志系统，通过收集分析es日志，排查开发/生产环境中的接口问题。' },
    { text: '了解xcl-job分布式定时任务，会根据业务场景书写定时任务和配置。' },
    { text: '了解Vue、jQuery等前端框架，会使用并编写页面' },
    { text: '熟练使用IDEA、Maven、Git以及Postman、foxapi等工具进行团队协作开发。' }
];

// 实习经历
const workExperience = [
    {
        company: '小西科技集团',
        position: '软件工程师',
        period: '2024-09~2025-07',
        purpose: '为了解企业微服务项目管理，自研产品迭代流程，快速部署上线、学习微服务架构知识、学习如何面对高并发场景下线程安全问题、了解如何监控线上环境、线上调优。',
        tech: 'SpringBoot+MyBatisPlus+Nacos+OpenFeign+MySQL+Redis+xxl-job+Elasticsearch+Prometheus与Grafana',
        duties: '负责回回加速器、云手机等项目搭建与业务选代如：负责微服务中Order服务相关业务，搭建ELFK日志收集，业务方面包括对用户下单，对接第三方支付工作，监控线上环境，对慢SQL调优，对线上问题：数据库死锁、OOM问题及时修复与解决。',
        results: [
            '接触k8s，并熟悉在日常开发中的使用，配置文件、搭建配置应用，卷挂载、项目快速部署CI/CD流水线。熟悉日志收集和线上监控，通过日志和业务场景快速定位问题',
            '参与项目技术研讨会，通过分析预估系统流量，与业务分析，讨论出成熟的限流方案，解决友商恶意攻击、对服务进行保护。',
            '通过Redis做旁路缓存以及对Redis数据结构应用，解决高并发商品积分兑换库存超卖问题，和一人一单业务需求。',
            '通过Grafana对容器cpu、内存监控以及对JVM各个区域的内存使用情况和GC次数进行调优，实现测试环境GC频率降低 30%',
            '对项目对接第三方支付支付宝支付功能，占支付比例 37% ，通过业务补偿方案解决线上用户支付缺陷。',
            '书写xcl-job定时任务，通过定时任务处理超时订单。'
        ],
        difficulties: [
            '项目难点攻克，解决开发中遇到的技术问题或业务方案评定，如：OOM，支付宝回调错误的补偿方案。',
            '微服务项目搭建链路追踪、日志收集，对统一请求响应封装搭建，规范前后端开发、为定位问题，收集接口耗时、信息做数据源。'
        ]
    },
    {
        company: '用友网络',
        position: '客户开发',
        period: '2024-04~2024-09',
        purpose: '为了解大型企业开发流程、技术选型与代码规范，获得专业培养，深入了解企业开发模式以及深化企业业务的理解。',
        tech: '企业内部自研的工具nc65、nccloud，其中前端基于js/react，后端Java自研封装模块，数据结构。',
        duties: '负责美特好项目二次开发，负责相关数据单据的生成以及编写审批流、推单、拉单代码',
        results: [
            '通过学习企业内部工具，了解底层封装代码，对如何编写更规范的代码，以及相关性能调优、设计模式有了深刻理解。',
            '通过不断解决客户需求和问题，提升自己debug代码以及解决问题，沟通的能力。',
            '了解数据库表，上手对库表结构，索引优化。'
        ]
    },
    {
        company: '山西中科津开发有限公司',
        position: 'Java开发工程师',
        period: '2024-02 ~ 2024-04',
        purpose: '为进一步学习深入企业化的技术，了解企业开发模式以及深化企业业务的理解。',
        tech: 'SpringBoot后端框架、MybatisPlus数据库操作、HTML、CSS和JavaScript，使用Vue、jQuery前端框架、RocketMQ 消息队列。',
        duties: '负责国网短信平台的后端接口书写与debug，负责目标管理项目的"项目评估"模块前后端书写与调试',
        results: [
            '通过指导学习，学习书写MySQL视图。',
            '学习分库分表，建立中间表，使短信平台统计接口响应时间从10s降到500ms左右。',
            '了解了企业开发流程以及需求，对业务逻辑、代码规范有了深刻的理解。'
        ]
    }
];

// 项目经历
const projectDetail = {
    projects: [
        {
            title: '云手机-前台商业化',
            period: '2025-03 ~ 2025-07',
            role: '后端开发',
            description: '构建完整的云手机即服务（PaaS）平台，从底层IaaS到上层SaaS的全栈解决方案，支持个人用户和企业客户通过Web/API方式创建和管理云手机实例',
            architecture: '基于微服务架构，网关层面做请求的转发与权限校验、日志收集、限流。',
            responsibility: '负责项目网关限流、日志收集工作以及部署ELK日志收集链路、订单下单、套餐等核心业务，基于注解 + AOP + redis实现用户幂等下单。'
        },
        {
            title: '回国加速器',
            period: '2024-09 ~ 2025-03',
            role: '后端开发',
            description: '为海外留学生、海外华人、对于国内游戏/影音产品关注的外国客户，提供对应用的加速服务',
            architecture: '本项目采用了微服务架构，API管理和认证、核心业务逻辑处理、监控与日志管理以及数据库和消息队列等基础服务支持。技术栈包括Nacos、Prometheus、Grafana、MySQL、Redis、ElasticSearch，并集成了GitLab、Jenkins、Docker、K8S以实现代码管理、持续集成部署及容器化和弹性伸缩。',
            responsibility: '负责官网对接第三方支付平台，实现扫码支付功能，书写相关内测活动商品兑换的代码，解决商品兑换峰值qps500'
        },
        {
            title: '目标管理系统',
            period: '2024-02 ~ 2024-04',
            role: '前后端开发',
            description: '是一个创新的项目管理工具的开发，旨在通过精确分析和规划来提高项目执行的效率和成功率，准确评估项目各个阶段的工作量及所需时间、确保项目按时交付和资源高效利。',
            architecture: '主体骨架基于SSM框架，使用MySQL进行数据持久化，前端使用jQuery框架，layui。',
            responsibility: '负责撰写本人负责模块前后端页面开发与联调，在项目初期分析目标客户需求书写业务流程图，同时参与了数据库设计。'
        }
    ]
};

// 校园经历
const campusDetail = [
    {
        org: '中北大学国旗护卫队',
        position: '护卫队队员',
        period: '2021-11 ~ 2022-11',
        desc: '负责中北大学该学年升降国旗、活动任务、日常训练的相关事项，打造坚实的体能和意志力'
    },
    {
        org: '中北大学教官大队',
        position: '教官教员',
        period: '2022-09 ~ 2023-10',
        desc: '负责22级、23级新生军训的相关班级教官职责、负责教官队新队员的日常训练与出操、活动任务，连续两年军训荣获优秀教官，所带班级获得优秀军训团体奖项'
    }
];

// 自我评价
const selfEval = '具备较强的责任心，良好的沟通和表达能力、自我驱动能力和协调能力；具有较强的逻辑思维能力、分析能力、业务理解能力；具有良好的时间管理能，业余时间喜欢阅读一些技术书籍；具有较强的间题解决能力，能够通过业务快速定位问题课可能的出处；热爱互联网事业，有一定抗压能力';

// ===== 渲染函数 =====

// 渲染教育背景
function renderEducationDetail() {
    const container = document.getElementById('educationDetail');
    if (!container) return;

    container.innerHTML = `
        <div class="work-card">
            <div class="work-card-header">
                <div>
                    <h3 class="work-company">${educationDetail.school}</h3>
                    <p class="work-position">${educationDetail.degree}</p>
                </div>
                <span class="work-period">
                    <i class="far fa-calendar-alt"></i>
                    ${educationDetail.period}
                </span>
            </div>
            <ul class="work-desc">
                <li>${educationDetail.rank}</li>
                <li>${educationDetail.awards}</li>
            </ul>
        </div>
    `;
}

// 渲染专业技能详情
function renderSkillsDetail() {
    const container = document.getElementById('skillsDetail');
    if (!container) return;

    container.innerHTML = `
        <div class="skill-list">
            ${skillsDetail.map(skill => `
                <div class="skill-item">
                    <span class="skill-bullet">·</span>
                    <span class="skill-text">${skill.text}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// 渲染实习经历
function renderWorkExperience() {
    const container = document.getElementById('workExperience');
    if (!container) return;

    container.innerHTML = workExperience.map(work => `
        <div class="work-card">
            <div class="work-card-header">
                <div>
                    <h3 class="work-company">${work.company}</h3>
                    <p class="work-position">${work.position}</p>
                </div>
                <span class="work-period">
                    <i class="far fa-calendar-alt"></i>
                    ${work.period}
                </span>
            </div>
            <div class="intern-content">
                <div class="intern-section">
                    <p class="intern-label">实习目的：</p>
                    <p class="intern-text">${work.purpose}</p>
                </div>
                <div class="intern-section">
                    <p class="intern-label">所用技术：</p>
                    <p class="intern-text">${work.tech}</p>
                </div>
                <div class="intern-section">
                    <p class="intern-label">工作职责：</p>
                    <p class="intern-text">${work.duties}</p>
                </div>
                ${work.results ? `
                <div class="intern-section">
                    <p class="intern-label">实习成果：</p>
                    <ul class="intern-list">
                        ${work.results.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                ${work.difficulties ? `
                <div class="intern-section">
                    <p class="intern-label">实习难点：</p>
                    <ul class="intern-list">
                        ${work.difficulties.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// 渲染项目详情
function renderProjectDetail() {
    const container = document.getElementById('projectDetail');
    if (!container) return;

    container.innerHTML = projectDetail.projects.map((proj, index) => `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${proj.title}</h3>
                <span class="project-period">${proj.period}</span>
            </div>
            ${proj.description ? `<p class="project-intro"><strong>项目描述：</strong>${proj.description}</p>` : ''}
            ${proj.architecture ? `<p class="project-intro"><strong>项目架构：</strong>${proj.architecture}</p>` : ''}
            ${proj.background ? `<p class="project-intro"><strong>项目背景：</strong>${proj.background}</p>` : ''}
            ${proj.responsibility ? `<p class="project-intro"><strong>项目职责：</strong>${proj.responsibility}</p>` : ''}
            ${index === 1 && proj.responsibility ? `
            <ul class="work-desc" style="margin-top: 12px;">
                <li>解决支付宝回调接口未调用导致用户没有收到对应支付商品（评定补偿方案，解决线上用户支付后没有收到对应商品的问题）。</li>
                <li>由于积分秒杀商品的特性有较大的并发量，通过使用分布式锁，解决高并发场景下积分兑换商品扣减超卖问题，通过使用Redis业务数据结构，实现一人一单。</li>
                <li>通过代码评审规范自己书写的代码。</li>
            </ul>
            ` : ''}
            ${index === 2 && proj.responsibility ? `
            <ul class="work-desc" style="margin-top: 12px;">
                <li>通过使用雪花算法的主键生成策略避免主键冲突，快速学习jQuery框架，并落实到项目开发当中。</li>
                <li>通过编写对表单表单的编辑前后事件，通过鉴权角色管理和设置浏览态与编辑态，完成对客户业务的需求。</li>
            </ul>
            ` : ''}
        </div>
    `).join('');
}

// 渲染校园经历
function renderCampusDetail() {
    const container = document.getElementById('campusDetail');
    if (!container) return;

    container.innerHTML = campusDetail.map(item => `
        <div class="work-card">
            <div class="work-card-header">
                <div>
                    <h3 class="work-company">${item.org}</h3>
                    <p class="work-position">${item.position}</p>
                </div>
                <span class="work-period">
                    <i class="far fa-calendar-alt"></i>
                    ${item.period}
                </span>
            </div>
            <ul class="work-desc">
                <li>${item.desc}</li>
            </ul>
        </div>
    `).join('');
}

// 渲染自我评价
function renderSelfEval() {
    const container = document.getElementById('selfEval');
    if (!container) return;

    container.innerHTML = `
        <div class="project-highlight" style="padding: 24px;">
            <p class="highlight-desc" style="font-size: 0.95rem; line-height: 1.9;">${selfEval}</p>
        </div>
    `;
}

// 渲染侧边栏技能标签
function renderSidebarSkills() {
    const container = document.getElementById('sidebarSkills');
    if (!container) return;

    const skills = ['Java', 'JVM', 'MySQL', 'Redis', 'Spring Boot', 'MyBatis', 'ES', 'Nacos', 'K8S'];
    const icons = ['fab fa-java', 'fas fa-microchip', 'fas fa-database', 'fas fa-server', 'fas fa-leaf', 'fas fa-database', 'fas fa-search', 'fas fa-cloud', 'fas fa-dharmachakra'];

    container.innerHTML = skills.map((skill, i) => `
        <span class="skill-tag">
            <i class="${icons[i]}"></i>
            ${skill}
        </span>
    `).join('');
}

// ===== 导航功能 =====

function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ===== 初始化 =====

document.addEventListener('DOMContentLoaded', () => {
    renderSidebarSkills();
    renderEducationDetail();
    renderSkillsDetail();
    renderWorkExperience();
    renderCampusDetail();
    renderSelfEval();
    renderProjectDetail();
    initTabs();
});
