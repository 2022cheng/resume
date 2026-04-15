// ===== 简历数据 =====

// 侧边栏技能标签
const sidebarSkills = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'JVM', icon: 'fas fa-microchip' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Redis', icon: 'fas fa-server' },
    { name: 'Spring Cloud', icon: 'fas fa-leaf' },
    { name: 'Kafka', icon: 'fas fa-envelope-open-text' },
    { name: 'ES', icon: 'fas fa-search' }
];

// 详细技能卡片
const skillsDetail = [
    {
        title: 'Java并发与JVM',
        icon: 'fas fa-microchip',
        desc: '具备扎实的Java并发编程基础，深入理解JVM内存模型、类加载机制与垃圾回收算法，拥有丰富的线上OOM与GC调优实战排障经验。'
    },
    {
        title: 'MySQL与Redis',
        icon: 'fas fa-database',
        desc: '精通MySQL的InnoDB存储引擎底层结构与MVCC机制，具备千万级表数据的分库分表与复杂慢SQL深度调优经验；精通Redis的高可用架构与持久化机制，熟练运用分布式锁并能完美解决缓存雪崩与穿透等高可用问题。'
    },
    {
        title: 'Spring Cloud Alibaba',
        icon: 'fas fa-leaf',
        desc: '精通Spring Boot与Spring Cloud Alibaba微服务生态，熟练掌握Nacos注册中心、Sentinel限流降级及Gateway全局网关的底层运行逻辑与定制化二次开发。'
    },
    {
        title: '消息队列与搜索引擎',
        icon: 'fas fa-envelope-open-text',
        desc: '精通Kafka或RocketMQ消息队列的内部架构，具备处理消息防丢失、防重复消费及海量消息堆积的成熟方法论；熟悉Elasticsearch搜索引擎的倒排索引机制与复杂聚合查询优化。'
    }
];

// 工作经历
const workExperience = [
    {
        company: '某某科技有限公司',
        position: '高级后端开发工程师',
        period: '2023.05 - 至今',
        duties: [
            '担任核心交易链路技术骨干，主导电商大促期间订单与支付模块的微服务架构演进与容量规划。',
            '负责组内技术基建与难点攻坚，制定并落地团队内部的代码规范与Code Review机制。',
            '成功主导交易系统从单体向微服务架构的平滑迁移，实现核心链路与边缘业务的彻底解耦。',
            '针对历年大促期间数据库连接池打满的痛点，对订单表的分库分表改造，支撑了500万笔订单的峰值写入。',
            '带领3名初中级研发攻克了分布式锁性能瓶颈，通过引入分段锁机制将秒杀接口的吞吐量提升了40%。'
        ]
    },
    {
        company: '某高速成长独角兽企业',
        position: 'Java研发工程师',
        period: '2020.07 - 2023.03',
        duties: [
            '负责泛娱乐社交平台消息触达与用户激励系统的后端研发，对接海量用户的签到与积分发放业务。',
            '协助架构师完成底层监控大盘的搭建，参与制定线上故障的定级与快速应急响应预案。'
        ]
    }
];

// 项目经历
const projectDetail = {
    title: '全链路高并发交易营销平台',
    period: '2024.01 - 2026.01',
    role: '后端负责人',
    intro: '支撑上亿级别用户的电商核心交易平台，涵盖商品大促秒杀、分布式库存扣减、复杂营销卡券叠加结算以及异步订单履约等核心链路，面临极高并发与数据一致性的双重挑战。',
    highlights: [
        {
            title: '多级缓存防线',
            desc: '在Nginx层结合Lua脚本进行前置限流，业务层采用Redis集群做热点商品预热。结合本地Guava缓存拦截无效请求，成功抗住了每秒10万次的峰值查询流量。'
        },
        {
            title: '突破库存高并发瓶颈',
            desc: '放弃传统的数据库悲观锁，采用Redis结合Lua脚本实现库存的原子性预扣减，同时利用消息队列异步驱动MySQL进行最终落盘，整体交易吞吐量提升了5倍以上。'
        },
        {
            title: '分布式事务柔性保障',
            desc: '针对支付与营销积分跨库操作的痛点，采用RocketMQ事务消息结合本地消息表方案，配合定时任务重试补偿机制，实现了99.99%的分布式数据最终一致性保障。'
        },
        {
            title: '大促全链路压测与容量规划',
            desc: '基于JMeter与压测集群模拟上亿级流量场景，梳理核心链路瓶颈，完成服务扩容与参数调优，保障大促期间核心接口可用性达99.99%，零超时零宕机。'
        }
    ]
};

// ===== 渲染函数 =====

// 渲染侧边栏技能标签
function renderSidebarSkills() {
    const container = document.getElementById('sidebarSkills');
    if (!container) return;
    
    container.innerHTML = sidebarSkills.map(skill => `
        <span class="skill-tag">
            <i class="${skill.icon}"></i>
            ${skill.name}
        </span>
    `).join('');
}

// 渲染工作经历
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
            <ul class="work-desc">
                ${work.duties.map(duty => `<li>${duty}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// 渲染专业技能详情
function renderSkillsDetail() {
    const container = document.getElementById('skillsDetail');
    if (!container) return;
    
    container.innerHTML = skillsDetail.map(skill => `
        <div class="skill-card">
            <h3 class="skill-card-title">
                <i class="${skill.icon}"></i>
                ${skill.title}
            </h3>
            <p class="skill-card-desc">${skill.desc}</p>
        </div>
    `).join('');
}

// 渲染项目详情
function renderProjectDetail() {
    const container = document.getElementById('projectDetail');
    if (!container) return;
    
    container.innerHTML = `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${projectDetail.title}</h3>
                <span class="project-period">${projectDetail.period}</span>
            </div>
            <p class="project-intro">${projectDetail.intro}</p>
            
            <p class="project-section-title"><i class="fas fa-star"></i> 个人职责</p>
            <div class="project-highlight">
                <p class="highlight-desc">负责秒杀抢购网关层的限流降级设计与底层的库存安全扣减方案落地。主导订单支付成功后的履约状态机开发，处理跨微服务间的数据最终一致性问题。</p>
            </div>
            
            <p class="project-section-title"><i class="fas fa-rocket"></i> 技术亮点</p>
            ${projectDetail.highlights.map(h => `
                <div class="project-highlight">
                    <h4 class="highlight-title">${h.title}</h4>
                    <p class="highlight-desc">${h.desc}</p>
                </div>
            `).join('')}
        </div>
    `;
}

// ===== 导航功能 =====

function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;
            
            // 切换标签
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // 切换内容
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
            
            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ===== 初始化 =====

document.addEventListener('DOMContentLoaded', () => {
    renderSidebarSkills();
    renderWorkExperience();
    renderSkillsDetail();
    renderProjectDetail();
    initTabs();
});
