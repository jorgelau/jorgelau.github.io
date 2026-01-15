// ============================================================
// Creative AI Studio - Interactive Prototype
// ============================================================

// ============================================================
// Global State & Mock Data
// ============================================================

const AppState = {
    // Mock assets data
    assets: [
        {
            id: 'asset-001',
            title: 'Summer Sale Banner',
            type: 'multilingual',
            projectId: 'project-001',
            derivedFrom: null, // Original asset
            originalImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800',
            languages: ['EN', 'AR', 'FR', 'ES', 'ZH'],
            tags: ['banner', 'sale', 'summer'],
            creator: 'Jane Doe',
            requester: 'Marketing Team',
            liked: false,
            transparent: true,
            createdAt: '2024-01-10',
            sizes: {
                'EN': [
                    { width: 1200, height: 628, url: 'cdn://en/1200x628.png', bucket: 'creative-assets' },
                    { width: 800, height: 600, url: 'cdn://en/800x600.png', bucket: 'creative-assets' },
                    { width: 400, height: 400, url: 'cdn://en/400x400.png', bucket: 'creative-assets' }
                ],
                'AR': [
                    { width: 1200, height: 628, url: 'cdn://ar/1200x628.png', bucket: 'creative-assets' },
                    { width: 800, height: 600, url: 'cdn://ar/800x600.png', bucket: 'creative-assets' }
                ],
                'FR': [
                    { width: 1200, height: 628, url: 'cdn://fr/1200x628.png', bucket: 'creative-assets' }
                ]
            }
        },
        {
            id: 'asset-002',
            title: 'Product Showcase',
            type: 'no-language',
            projectId: 'project-002',
            derivedFrom: null, // Original asset
            originalImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
            tags: ['product', 'minimal', 'white'],
            creator: 'John Smith',
            requester: 'Product Team',
            liked: true,
            transparent: false,
            createdAt: '2024-01-08',
            sizes: [
                { width: 1200, height: 628, url: 'cdn://1200x628.png', bucket: 'creative-assets' },
                { width: 800, height: 600, url: 'cdn://800x600.png', bucket: 'creative-assets' },
                { width: 400, height: 400, url: 'cdn://400x400.png', bucket: 'creative-assets' }
            ]
        },
        {
            id: 'asset-003',
            title: 'Holiday Promotion',
            type: 'multilingual',
            projectId: 'project-001',
            derivedFrom: 'asset-001', // Modified from Summer Sale Banner
            originalImage: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800',
            languages: ['EN', 'ZH'],
            tags: ['holiday', 'promotion', 'festive'],
            creator: 'Alice Chen',
            requester: 'Marketing Team',
            liked: false,
            transparent: true,
            createdAt: '2024-01-05',
            sizes: {
                'EN': [
                    { width: 1200, height: 628, url: 'cdn://en/1200x628.png', bucket: 'creative-assets' }
                ],
                'ZH': [
                    { width: 1200, height: 628, url: 'cdn://zh/1200x628.png', bucket: 'creative-assets' }
                ]
            }
        },
        {
            id: 'asset-004',
            title: 'Abstract Background',
            type: 'no-language',
            projectId: 'project-003',
            derivedFrom: null, // Original asset
            originalImage: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800',
            tags: ['abstract', 'background', 'colorful'],
            creator: 'Bob Wilson',
            requester: 'Design Team',
            liked: true,
            transparent: true,
            createdAt: '2024-01-03',
            sizes: [
                { width: 1920, height: 1080, url: 'cdn://1920x1080.png', bucket: 'creative-assets' },
                { width: 1200, height: 628, url: 'cdn://1200x628.png', bucket: 'creative-assets' }
            ]
        },
        {
            id: 'asset-005',
            title: 'New Collection Launch',
            type: 'multilingual',
            projectId: 'project-002',
            derivedFrom: 'asset-002', // Modified from Product Showcase
            originalImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
            languages: ['EN', 'FR', 'ES'],
            tags: ['collection', 'fashion', 'launch'],
            creator: 'Emma Davis',
            requester: 'Brand Team',
            liked: false,
            transparent: false,
            createdAt: '2024-01-01',
            sizes: {
                'EN': [
                    { width: 1200, height: 628, url: 'cdn://en/1200x628.png', bucket: 'creative-assets' }
                ]
            }
        },
        {
            id: 'asset-006',
            title: 'Tech Gadget Photo',
            type: 'no-language',
            projectId: 'project-003',
            derivedFrom: 'asset-004', // Modified from Abstract Background
            originalImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
            tags: ['tech', 'gadget', 'modern'],
            creator: 'Mike Johnson',
            requester: 'Tech Team',
            liked: true,
            transparent: true,
            createdAt: '2023-12-28',
            sizes: [
                { width: 800, height: 600, url: 'cdn://800x600.png', bucket: 'creative-assets' }
            ]
        }
    ],

    // Workspace jobs
    jobs: [
        {
            id: 'job-001',
            type: 'multilingual-replace',
            status: 'success',
            inputImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400',
            languages: ['EN', 'AR', 'FR'],
            createdAt: '2024-01-10 14:30',
            assetId: 'asset-001'
        },
        {
            id: 'job-002',
            type: 'multi-size',
            status: 'processing',
            inputImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
            sizes: 8,
            createdAt: '2024-01-10 15:00',
            progress: 60
        }
    ],

    // Size presets
    sizePresets: [
        {
            id: 'preset-builder',
            name: 'Builder套图',
            sizes: [
                { width: 1200, height: 628, transparent: false, maxSize: null, formats: ['png', 'jpg'] },
                { width: 800, height: 600, transparent: false, maxSize: 500, formats: ['png'] },
                { width: 400, height: 400, transparent: true, maxSize: 200, formats: ['png'] }
            ]
        },
        {
            id: 'preset-banner',
            name: 'Banner套图',
            sizes: [
                { width: 1920, height: 600, transparent: false, maxSize: null, formats: ['jpg'] },
                { width: 1200, height: 400, transparent: false, maxSize: null, formats: ['jpg'] }
            ]
        },
        {
            id: 'preset-social',
            name: 'Social Media',
            sizes: [
                { width: 1080, height: 1080, transparent: false, maxSize: null, formats: ['jpg', 'png'] },
                { width: 1200, height: 628, transparent: false, maxSize: null, formats: ['jpg'] },
                { width: 1080, height: 1920, transparent: false, maxSize: null, formats: ['jpg'] }
            ]
        }
    ],

    // Projects
    projects: [
        {
            id: 'project-001',
            name: 'Summer Campaign 2024',
            description: '夏季营销活动相关素材',
            createdAt: '2024-01-01'
        },
        {
            id: 'project-002',
            name: 'Product Launch',
            description: '新产品发布会素材',
            createdAt: '2024-01-05'
        },
        {
            id: 'project-003',
            name: 'Brand Refresh',
            description: '品牌升级相关设计素材',
            createdAt: '2024-01-10'
        }
    ],

    // Prompt Library
    presetPrompts: {
        'multilingual-layout': [
            { id: 'ml-preset-1', text: '文字居中显示', category: 'multilingual-layout' },
            { id: 'ml-preset-2', text: '放大字体，增加可读性', category: 'multilingual-layout' },
            { id: 'ml-preset-3', text: '增加文字边距，留出呼吸空间', category: 'multilingual-layout' },
            { id: 'ml-preset-4', text: '文字左对齐，适合长段落', category: 'multilingual-layout' },
            { id: 'ml-preset-5', text: '使用粗体强调关键信息', category: 'multilingual-layout' }
        ],
        'size-adjustment': [
            { id: 'sa-preset-1', text: '居中显示主体内容', category: 'size-adjustment' },
            { id: 'sa-preset-2', text: '放大主体，填充画面', category: 'size-adjustment' },
            { id: 'sa-preset-3', text: '留出上下边距，保持呼吸感', category: 'size-adjustment' },
            { id: 'sa-preset-4', text: '主体左对齐，右侧留白', category: 'size-adjustment' },
            { id: 'sa-preset-5', text: '等比例缩放，保持完整', category: 'size-adjustment' }
        ],
        'translation': [
            { id: 'tr-preset-1', text: '保持语气正式、专业', category: 'translation' },
            { id: 'tr-preset-2', text: '使用轻松、口语化的表达', category: 'translation' },
            { id: 'tr-preset-3', text: '简洁明了，适合营销', category: 'translation' },
            { id: 'tr-preset-4', text: '保留原文情感和语调', category: 'translation' }
        ]
    },

    // User prompt history
    userPrompts: [],
    // Structure: { id, text, category, usageCount, createdAt, lastUsedAt }

    // Favorite prompt IDs
    favoritePromptIds: [],

    // Prompt editor state
    editingPromptCategory: null,
    editingPromptId: null,

    // Prompt selector state
    promptSelectorCategory: null,
    promptSelectorCallback: null,

    // Filter state
    filters: {
        tags: [],
        creator: '',
        requester: '',
        languages: [],
        languageMode: 'any', // 'any' or 'all'
        noLanguageOnly: false,
        transparent: null,
        liked: false,
        myCreations: false,
        timeRange: null,
        project: null // Current project filter
    },

    // View state
    currentView: 'grid',
    currentSort: 'newest',
    currentPage: 'library',
    selectedAsset: null,
    selectedLanguage: null,

    // Multi-size cropping state
    currentCroppingSizes: [],
    currentSourceImage: null,
    currentCroppingLanguage: null, // Current language being previewed in cropping
    multilingualCroppingParams: {}, // Store cropping params per language: {EN: [...sizes], AR: [...sizes]}

    // Multilingual state
    currentMultilingualAsset: null,
    currentMultilingualLanguages: [],
    currentMultilingualTexts: {},
    currentMultilingualPreviews: {},
    currentPreviewLanguage: null,
    isMultilingualFlow: false,

    // Preset editor state
    editingPresetId: null,
    editingPresetSizes: [],

    // Multi-size selection state
    selectedSizesForGeneration: [],

    // Project editor state
    editingProjectId: null
};

// ============================================================
// Utility Functions
// ============================================================

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('已复制到剪贴板');
    });
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 40px;
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================================
// Page Rendering Functions
// ============================================================

// Render Asset Library
function renderAssetLibrary() {
    const grid = document.getElementById('assetsGrid');
    const filteredAssets = filterAssets(AppState.assets);

    if (filteredAssets.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: var(--color-secondary);">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin-bottom: 20px; opacity: 0.3;">
                    <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M20 32L28 24L36 32L44 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p style="font-size: 18px; margin-bottom: 8px;">未找到匹配的素材</p>
                <p style="font-size: 14px;">尝试调整筛选条件或清除筛选</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredAssets.map(asset => {
        const languageChips = asset.type === 'multilingual'
            ? `<div class="language-chips">
                ${asset.languages.map(lang => `<span class="chip">${lang}</span>`).join('')}
               </div>`
            : `<div class="language-chips"><span class="chip">无语言</span></div>`;

        return `
            <div class="asset-card" data-id="${asset.id}">
                <img src="${asset.originalImage}" alt="${asset.title}" class="asset-image">
                <div class="asset-info">
                    <div class="asset-header">
                        <h3 class="asset-title">${asset.title}</h3>
                        <button class="like-btn ${asset.liked ? 'liked' : ''}" data-id="${asset.id}">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="${asset.liked ? 'currentColor' : 'none'}">
                                <path d="M10 17.5L8.825 16.45C4.5 12.525 1.75 10.025 1.75 7C1.75 4.5 3.675 2.5 6 2.5C7.36 2.5 8.67 3.085 10 4.085C11.33 3.085 12.64 2.5 14 2.5C16.325 2.5 18.25 4.5 18.25 7C18.25 10.025 15.5 12.525 11.175 16.45L10 17.5Z" stroke="currentColor" stroke-width="1.5"/>
                            </svg>
                        </button>
                    </div>
                    ${languageChips}
                    <div class="asset-tags">
                        ${asset.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add click handlers
    document.querySelectorAll('.asset-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.like-btn')) {
                const assetId = card.dataset.id;
                showAssetDetail(assetId);
            }
        });
    });

    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLike(btn.dataset.id);
        });
    });

    // Populate project filter dropdown
    populateProjectFilter();
}

function populateProjectFilter() {
    const projectFilter = document.getElementById('projectFilter');
    if (!projectFilter) return;

    const currentValue = AppState.filters.project;

    // Generate options
    const options = [
        '<option value="">所有 Project</option>',
        ...AppState.projects.map(project => {
            const assetsCount = AppState.assets.filter(a => a.projectId === project.id).length;
            const selected = currentValue === project.id ? 'selected' : '';
            return `<option value="${project.id}" ${selected}>${project.name} (${assetsCount})</option>`;
        })
    ];

    projectFilter.innerHTML = options.join('');
}

function filterByProject(projectId) {
    AppState.filters.project = projectId || null;
    renderAssetLibrary();
}

// Filter assets based on current filter state
function filterAssets(assets) {
    return assets.filter(asset => {
        // Project filter
        if (AppState.filters.project && asset.projectId !== AppState.filters.project) {
            return false;
        }

        // Tags filter
        if (AppState.filters.tags.length > 0) {
            const hasTag = AppState.filters.tags.some(tag =>
                asset.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
            );
            if (!hasTag) return false;
        }

        // Creator filter
        if (AppState.filters.creator && !asset.creator.toLowerCase().includes(AppState.filters.creator.toLowerCase())) {
            return false;
        }

        // Requester filter
        if (AppState.filters.requester && !asset.requester.toLowerCase().includes(AppState.filters.requester.toLowerCase())) {
            return false;
        }

        // No-language only filter
        if (AppState.filters.noLanguageOnly && asset.type !== 'no-language') {
            return false;
        }

        // Languages filter
        if (AppState.filters.languages.length > 0 && !AppState.filters.noLanguageOnly) {
            if (asset.type === 'no-language') return false;

            if (AppState.filters.languageMode === 'all') {
                const hasAllLanguages = AppState.filters.languages.every(lang =>
                    asset.languages.includes(lang)
                );
                if (!hasAllLanguages) return false;
            } else {
                const hasAnyLanguage = AppState.filters.languages.some(lang =>
                    asset.languages.includes(lang)
                );
                if (!hasAnyLanguage) return false;
            }
        }

        // Transparent filter
        if (AppState.filters.transparent !== null && asset.transparent !== AppState.filters.transparent) {
            return false;
        }

        // Liked filter
        if (AppState.filters.liked && !asset.liked) {
            return false;
        }

        return true;
    });
}

// Show asset detail page
/**
 * Generate HTML for "Derived From" section
 */
function renderDerivedFromSection(asset) {
    if (!asset.derivedFrom) {
        return ''; // No source asset
    }

    const sourceAsset = AppState.assets.find(a => a.id === asset.derivedFrom);
    if (!sourceAsset) {
        return ''; // Source asset not found
    }

    return `
        <div style="margin-bottom: 20px;">
            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 8px;">修改自</div>
            <div onclick="showAssetDetail('${sourceAsset.id}')" style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border: 1px solid var(--color-border); border-radius: var(--radius); cursor: pointer; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.08)'" onmouseout="this.style.borderColor='var(--color-border)'; this.style.boxShadow='none'">
                <div style="width: 60px; height: 60px; border-radius: 6px; overflow: hidden; flex-shrink: 0;">
                    <img src="${sourceAsset.originalImage}" style="width: 100%; height: 100%; object-fit: cover;" alt="${sourceAsset.title}">
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${sourceAsset.title}</div>
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--color-secondary);">
                        <span>${sourceAsset.type === 'multilingual' ? '多语言' : '无语言'}</span>
                        <span>•</span>
                        <span>${sourceAsset.creator}</span>
                    </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink: 0; color: var(--color-secondary);">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    `;
}

function showAssetDetail(assetId) {
    const asset = AppState.assets.find(a => a.id === assetId);
    if (!asset) return;

    AppState.selectedAsset = asset;
    AppState.selectedLanguage = asset.type === 'multilingual' ? asset.languages[0] : null;

    const detailPage = document.getElementById('detailPage');

    if (asset.type === 'no-language') {
        // Layout 1: No-language asset
        detailPage.innerHTML = `
            <div class="detail-header">
                <button class="btn-secondary" onclick="backToLibrary()">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12 5L7 10L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    返回素材库
                </button>
                <h2 style="font-family: var(--font-display); font-size: 36px; font-weight: 400; margin: 20px 0;">${asset.title}</h2>
                <div style="display: flex; gap: 12px;">
                    <button class="btn-secondary" onclick="downloadAsset('${asset.id}')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 3V13M10 13L14 9M10 13L6 9M3 17H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        下载原图
                    </button>
                    <button class="btn-secondary" onclick="downloadAllSizes('${asset.id}')">打包下载全部尺寸</button>
                    <button class="btn-primary" onclick="startAICreation('${asset.id}')">AI 二次创作</button>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px; margin-top: 40px;">
                <div>
                    <div style="background: var(--color-surface); border-radius: var(--radius); padding: 20px; margin-bottom: 30px;">
                        <img src="${asset.originalImage}" style="width: 100%; border-radius: 8px;" alt="${asset.title}">
                    </div>

                    <div class="info-section">
                        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 20px;">衍生尺寸</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
                            ${asset.sizes.map(size => `
                                <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 16px;">
                                    <div style="aspect-ratio: ${size.width}/${size.height}; background: linear-gradient(135deg, #f5f5f0 0%, #e5e5e0 100%); border-radius: 6px; margin-bottom: 12px;"></div>
                                    <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">${size.width} × ${size.height}</div>
                                    <div style="font-size: 12px; color: var(--color-secondary); margin-bottom: 12px; font-family: monospace; overflow: hidden; text-overflow: ellipsis;">${size.url}</div>
                                    <div style="display: flex; gap: 8px;">
                                        <button class="btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 12px;" onclick="copyToClipboard('${size.url}')">复制链接</button>
                                        <button class="btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 12px;">下载</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div>
                    <div class="info-section" style="background: var(--color-surface); padding: 24px; border-radius: var(--radius);">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
                            <button class="like-btn ${asset.liked ? 'liked' : ''}" onclick="toggleLike('${asset.id}')" style="font-size: 24px;">
                                <svg width="28" height="28" viewBox="0 0 20 20" fill="${asset.liked ? 'currentColor' : 'none'}">
                                    <path d="M10 17.5L8.825 16.45C4.5 12.525 1.75 10.025 1.75 7C1.75 4.5 3.675 2.5 6 2.5C7.36 2.5 8.67 3.085 10 4.085C11.33 3.085 12.64 2.5 14 2.5C16.325 2.5 18.25 4.5 18.25 7C18.25 10.025 15.5 12.525 11.175 16.45L10 17.5Z" stroke="currentColor" stroke-width="1.5"/>
                                </svg>
                            </button>
                            <span style="font-size: 14px; color: var(--color-secondary);">${asset.liked ? '已收藏' : '收藏'}</span>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">类型</div>
                            <div style="display: inline-block; padding: 6px 12px; background: var(--color-hover); border-radius: 6px; font-size: 14px;">无语言素材</div>
                        </div>

                        ${renderDerivedFromSection(asset)}

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">创作人</div>
                            <div style="font-size: 15px;">${asset.creator}</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">提需人</div>
                            <div style="font-size: 15px;">${asset.requester}</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">创建时间</div>
                            <div style="font-size: 15px;">${formatDate(asset.createdAt)}</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">透明背景</div>
                            <div style="font-size: 15px;">${asset.transparent ? '是' : '否'}</div>
                        </div>

                        <div>
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 8px;">标签</div>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${asset.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                <button class="btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="editTags('${asset.id}')">编辑</button>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top: 20px; background: var(--color-surface); padding: 20px; border-radius: var(--radius);">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">快速操作</h4>
                        <button class="btn-secondary" style="width: 100%; margin-bottom: 12px;" onclick="startMultiSize('${asset.id}')">生成多尺寸图</button>
                        <button class="btn-secondary" style="width: 100%;" onclick="startAICreation('${asset.id}')">AI 二次创作</button>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Layout 2: Multilingual asset
        detailPage.innerHTML = `
            <div class="detail-header">
                <button class="btn-secondary" onclick="backToLibrary()">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12 5L7 10L12 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    返回素材库
                </button>
                <h2 style="font-family: var(--font-display); font-size: 36px; font-weight: 400; margin: 20px 0;">${asset.title}</h2>
                <div style="display: flex; gap: 12px;">
                    <button class="btn-secondary" onclick="downloadAsset('${asset.id}')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 3V13M10 13L14 9M10 13L6 9M3 17H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        下载原图
                    </button>
                    <button class="btn-secondary" onclick="downloadCurrentLanguage('${asset.id}')">下载当前语言</button>
                    <button class="btn-secondary" onclick="downloadAllLanguages('${asset.id}')">打包下载全部语言</button>
                    <button class="btn-primary" onclick="startAICreation('${asset.id}')">AI 二次创作</button>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px; margin-top: 40px;">
                <div>
                    <div style="background: var(--color-surface); border-radius: var(--radius); padding: 20px; margin-bottom: 30px;">
                        <img src="${asset.originalImage}" style="width: 100%; border-radius: 8px;" alt="${asset.title}">
                    </div>

                    <div class="info-section">
                        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 20px;">多语言版本</h3>
                        <div class="language-tabs" style="display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap;">
                            ${asset.languages.map(lang => `
                                <button class="language-tab ${lang === AppState.selectedLanguage ? 'active' : ''}"
                                        data-lang="${lang}"
                                        onclick="switchLanguage('${lang}')"
                                        style="padding: 10px 20px; border-radius: var(--radius); border: 1px solid var(--color-border); background: ${lang === AppState.selectedLanguage ? 'var(--color-primary)' : 'var(--color-surface)'}; color: ${lang === AppState.selectedLanguage ? 'white' : 'var(--color-primary)'}; cursor: pointer; font-weight: 500; transition: var(--transition);">
                                    ${lang}
                                    ${asset.sizes[lang] ? `<span style="margin-left: 8px; opacity: 0.7;">(${asset.sizes[lang].length})</span>` : '<span style="margin-left: 8px; opacity: 0.5;">处理中</span>'}
                                </button>
                            `).join('')}
                        </div>

                        <div id="languageSizes">
                            ${renderLanguageSizes(asset, AppState.selectedLanguage)}
                        </div>
                    </div>
                </div>

                <div>
                    <div class="info-section" style="background: var(--color-surface); padding: 24px; border-radius: var(--radius);">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
                            <button class="like-btn ${asset.liked ? 'liked' : ''}" onclick="toggleLike('${asset.id}')" style="font-size: 24px;">
                                <svg width="28" height="28" viewBox="0 0 20 20" fill="${asset.liked ? 'currentColor' : 'none'}">
                                    <path d="M10 17.5L8.825 16.45C4.5 12.525 1.75 10.025 1.75 7C1.75 4.5 3.675 2.5 6 2.5C7.36 2.5 8.67 3.085 10 4.085C11.33 3.085 12.64 2.5 14 2.5C16.325 2.5 18.25 4.5 18.25 7C18.25 10.025 15.5 12.525 11.175 16.45L10 17.5Z" stroke="currentColor" stroke-width="1.5"/>
                                </svg>
                            </button>
                            <span style="font-size: 14px; color: var(--color-secondary);">${asset.liked ? '已收藏' : '收藏'}</span>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">类型</div>
                            <div style="display: inline-block; padding: 6px 12px; background: var(--color-accent); color: white; border-radius: 6px; font-size: 14px;">多语言素材</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">支持语言</div>
                            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                                ${asset.languages.map(lang => `<span class="chip">${lang}</span>`).join('')}
                            </div>
                        </div>

                        ${renderDerivedFromSection(asset)}

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">创作人</div>
                            <div style="font-size: 15px;">${asset.creator}</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">提需人</div>
                            <div style="font-size: 15px;">${asset.requester}</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">创建时间</div>
                            <div style="font-size: 15px;">${formatDate(asset.createdAt)}</div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 4px;">透明背景</div>
                            <div style="font-size: 15px;">${asset.transparent ? '是' : '否'}</div>
                        </div>

                        <div>
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 8px;">标签</div>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${asset.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                <button class="btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="editTags('${asset.id}')">编辑</button>
                            </div>
                        </div>
                    </div>

                    <div style="margin-top: 20px; background: var(--color-surface); padding: 20px; border-radius: var(--radius);">
                        <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">快速操作</h4>
                        <button class="btn-secondary" style="width: 100%; margin-bottom: 12px;" onclick="addMoreLanguages('${asset.id}')">生成更多语言</button>
                        <button class="btn-secondary" style="width: 100%;" onclick="startAICreation('${asset.id}')">AI 二次创作</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Switch to detail page
    switchPage('detailPage');
}

function renderLanguageSizes(asset, language) {
    if (!asset.sizes[language]) {
        return `
            <div style="text-align: center; padding: 60px 20px; color: var(--color-secondary);">
                <div style="width: 40px; height: 40px; border: 3px solid var(--color-border); border-top-color: var(--color-accent); border-radius: 50%; margin: 0 auto 20px; animation: spin 1s linear infinite;"></div>
                <p>该语言版本正在处理中...</p>
            </div>
        `;
    }

    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
            ${asset.sizes[language].map(size => `
                <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 16px;">
                    <div style="aspect-ratio: ${size.width}/${size.height}; background: linear-gradient(135deg, #f5f5f0 0%, #e5e5e0 100%); border-radius: 6px; margin-bottom: 12px;"></div>
                    <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">${size.width} × ${size.height}</div>
                    <div style="font-size: 12px; color: var(--color-secondary); margin-bottom: 12px; font-family: monospace; overflow: hidden; text-overflow: ellipsis;">${size.url}</div>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 12px;" onclick="copyToClipboard('${size.url}')">复制链接</button>
                        <button class="btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 12px;">下载</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Render AI Create Page
function renderAICreatePage() {
    const createPage = document.getElementById('createPage');
    createPage.innerHTML = `
        <div class="page-header">
            <h2>AI 创作</h2>
        </div>

        <div style="display: grid; grid-template-columns: 240px 1fr 320px; gap: 30px; height: calc(100vh - 200px);">
            <!-- Tools Sidebar -->
            <div style="background: var(--color-surface); border-radius: var(--radius); padding: 20px; overflow-y: auto;">
                <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">工具</h3>
                <div class="tool-list">
                    <button class="tool-btn active" data-tool="text-to-image" onclick="selectTool('text-to-image')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M7 13L10 10L13 13M13 7H13.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        <span>文生图 / 图生图</span>
                    </button>
                    <button class="tool-btn" data-tool="remove-bg" onclick="selectTool('remove-bg')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
                            <circle cx="10" cy="10" r="4" fill="currentColor"/>
                        </svg>
                        <span>背景透明</span>
                    </button>
                    <button class="tool-btn" data-tool="upscale" onclick="selectTool('upscale')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 16L16 4M16 4H10M16 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>高清增强</span>
                    </button>
                    <button class="tool-btn" data-tool="multi-size" onclick="selectTool('multi-size')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <rect x="2" y="2" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                            <rect x="11" y="2" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                            <rect x="2" y="11" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                            <rect x="11" y="11" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        <span>多尺寸生成</span>
                    </button>
                    <button class="tool-btn" data-tool="multilingual" onclick="selectTool('multilingual')">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M2 10H18M10 2C12 4 13 7 13 10C13 13 12 16 10 18M10 2C8 4 7 7 7 10C7 13 8 16 10 18" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        <span>多语言文字替换</span>
                    </button>
                </div>
            </div>

            <!-- Canvas -->
            <div id="toolCanvas" style="background: var(--color-surface); border-radius: var(--radius); padding: 40px; display: flex; align-items: center; justify-content: center; overflow-y: auto;">
                <div style="text-align: center; color: var(--color-secondary);">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="opacity: 0.2; margin-bottom: 20px;">
                        <rect x="10" y="10" width="60" height="60" rx="4" stroke="currentColor" stroke-width="2"/>
                        <path d="M25 45L35 35L45 45L55 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p style="font-size: 18px; margin-bottom: 8px;">选择工具开始创作</p>
                    <p style="font-size: 14px;">从左侧工具栏选择一个 AI 工具</p>
                </div>
            </div>

            <!-- Settings Panel -->
            <div id="settingsPanel" style="background: var(--color-surface); border-radius: var(--radius); padding: 20px; overflow-y: auto;">
                <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">参数设置</h3>
                <div style="text-align: center; color: var(--color-secondary); padding: 40px 20px;">
                    <p style="font-size: 14px;">选择工具后显示参数</p>
                </div>
            </div>
        </div>

        <!-- Job Queue -->
        <div style="position: fixed; bottom: 20px; right: 20px; width: 400px; background: var(--color-surface); border-radius: var(--radius); box-shadow: var(--shadow-lg); padding: 20px; max-height: 200px; overflow-y: auto; display: none;" id="jobQueue">
            <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px;">处理队列</h4>
            <div id="jobList"></div>
        </div>
    `;
}

// Render Workspace Page
function renderWorkspacePage() {
    const workspacePage = document.getElementById('workspacePage');
    workspacePage.innerHTML = `
        <div class="page-header">
            <h2>工作台</h2>
            <div class="toolbar">
                <select class="sort-select">
                    <option>最新任务</option>
                    <option>处理中</option>
                    <option>已完成</option>
                    <option>失败</option>
                </select>
            </div>
        </div>

        <div style="display: grid; gap: 20px;">
            ${AppState.jobs.map(job => {
                const statusColors = {
                    'success': '#2ecc71',
                    'processing': '#f39c12',
                    'failed': '#e74c3c'
                };
                const statusTexts = {
                    'success': '已完成',
                    'processing': '处理中',
                    'failed': '失败'
                };
                const typeTexts = {
                    'multilingual-replace': '多语言文字替换',
                    'multi-size': '多尺寸生成',
                    'text-to-image': '文生图'
                };

                return `
                    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 24px; display: grid; grid-template-columns: 120px 1fr auto; gap: 24px; align-items: center;">
                        <img src="${job.inputImage}" style="width: 120px; height: 120px; object-fit: cover; border-radius: var(--radius);" alt="Input">
                        <div>
                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                                <h3 style="font-size: 18px; font-weight: 500;">${typeTexts[job.type]}</h3>
                                <span style="padding: 4px 12px; background: ${statusColors[job.status]}20; color: ${statusColors[job.status]}; border-radius: 12px; font-size: 12px; font-weight: 600;">${statusTexts[job.status]}</span>
                            </div>
                            <div style="color: var(--color-secondary); font-size: 14px; margin-bottom: 12px;">${job.createdAt}</div>
                            ${job.type === 'multilingual-replace' ? `
                                <div style="display: flex; gap: 6px;">
                                    ${job.languages.map(lang => `<span class="chip">${lang}</span>`).join('')}
                                </div>
                            ` : ''}
                            ${job.type === 'multi-size' ? `
                                <div style="font-size: 14px; color: var(--color-secondary);">${job.sizes} 个尺寸</div>
                            ` : ''}
                            ${job.status === 'processing' && job.progress ? `
                                <div style="margin-top: 12px;">
                                    <div style="background: var(--color-hover); height: 6px; border-radius: 3px; overflow: hidden;">
                                        <div style="background: var(--color-accent); height: 100%; width: ${job.progress}%; transition: width 0.3s;"></div>
                                    </div>
                                    <div style="font-size: 12px; color: var(--color-secondary); margin-top: 4px;">${job.progress}%</div>
                                </div>
                            ` : ''}
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            ${job.status === 'success' ? `
                                <button class="btn-secondary" onclick="viewJobResult('${job.id}')">查看结果</button>
                                ${job.assetId ? `<button class="btn-secondary" onclick="showAssetDetail('${job.assetId}')">查看素材</button>` : ''}
                            ` : ''}
                            ${job.status === 'processing' ? `
                                <button class="btn-secondary">取消</button>
                            ` : ''}
                            ${job.status === 'failed' ? `
                                <button class="btn-primary">重试</button>
                            ` : ''}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Render Settings Page
function renderSettingsPage() {
    const settingsPage = document.getElementById('settingsPage');
    settingsPage.innerHTML = `
        <div class="page-header">
            <h2>设置</h2>
        </div>

        <div style="max-width: 800px;">
            <!-- Project Management -->
            <div style="background: var(--color-surface); border-radius: var(--radius); padding: 30px; margin-bottom: 20px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">Project 管理</h3>
                <div style="display: grid; gap: 16px;">
                    ${AppState.projects.map(project => `
                        <div style="border: 1px solid var(--color-border); border-radius: var(--radius); padding: 20px;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                                <div style="flex: 1;">
                                    <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 6px;">${project.name}</h4>
                                    <p style="font-size: 13px; color: var(--color-secondary); line-height: 1.5;">${project.description}</p>
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 13px;" onclick="editProject('${project.id}')">编辑</button>
                                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 13px;" onclick="deleteProject('${project.id}')">删除</button>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px; margin-top: 12px;">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="5.5" stroke="var(--color-secondary)" stroke-width="1.5"/>
                                    <path d="M7 4V7L9 9" stroke="var(--color-secondary)" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <span style="font-size: 12px; color: var(--color-secondary);">创建于 ${formatDate(project.createdAt)}</span>
                                <span style="font-size: 12px; color: var(--color-secondary);">•</span>
                                <span style="font-size: 12px; color: var(--color-secondary);">
                                    ${AppState.assets.filter(a => a.projectId === project.id).length} 个素材
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="btn-primary" style="margin-top: 20px;" onclick="createNewProject()">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    新建 Project
                </button>
            </div>

            <!-- Prompt Library Management -->
            <div style="background: var(--color-surface); border-radius: var(--radius); padding: 30px; margin-bottom: 20px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">提示词库管理</h3>

                ${(() => {
                    const categories = [
                        { key: 'multilingual-layout', label: '多语言排版优化', icon: '📝' },
                        { key: 'size-adjustment', label: '尺寸裁剪调整', icon: '✂️' },
                        { key: 'translation', label: 'AI 翻译', icon: '🌐' }
                    ];

                    return categories.map(cat => {
                        const presetPrompts = AppState.presetPrompts[cat.key] || [];
                        const userPrompts = AppState.userPrompts.filter(p => p.category === cat.key);

                        return `
                            <div style="border: 1px solid var(--color-border); border-radius: var(--radius); padding: 24px; margin-bottom: 16px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                                    <h4 style="font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                                        <span>${cat.icon}</span>
                                        <span>${cat.label}</span>
                                    </h4>
                                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 13px;" onclick="addPresetPrompt('${cat.key}')">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M7 2V12M2 7H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                        </svg>
                                        添加预设提示词
                                    </button>
                                </div>

                                <!-- Preset Prompts -->
                                <div style="margin-bottom: 20px;">
                                    <div style="font-size: 13px; font-weight: 600; color: var(--color-secondary); margin-bottom: 8px;">预设提示词</div>
                                    ${presetPrompts.length > 0 ? `
                                        <div style="display: grid; gap: 8px;">
                                            ${presetPrompts.map(prompt => `
                                                <div style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: var(--color-hover); border-radius: 6px;">
                                                    <span style="flex: 1; font-size: 13px; color: var(--color-primary);">${prompt.text}</span>
                                                    <button class="btn-secondary" style="padding: 4px 8px; font-size: 12px;" onclick="editPresetPrompt('${cat.key}', '${prompt.id}')">编辑</button>
                                                    <button class="btn-secondary" style="padding: 4px 8px; font-size: 12px;" onclick="deletePresetPrompt('${cat.key}', '${prompt.id}')">删除</button>
                                                </div>
                                            `).join('')}
                                        </div>
                                    ` : `
                                        <div style="padding: 16px; background: var(--color-hover); border-radius: 6px; text-align: center; font-size: 13px; color: var(--color-secondary);">
                                            暂无预设提示词
                                        </div>
                                    `}
                                </div>

                                <!-- User Prompts -->
                                ${userPrompts.length > 0 ? `
                                    <div>
                                        <div style="font-size: 13px; font-weight: 600; color: var(--color-secondary); margin-bottom: 8px;">我的提示词</div>
                                        <div style="display: grid; gap: 8px;">
                                            ${userPrompts.map(prompt => {
                                                const isFavorite = AppState.favoritePromptIds.includes(prompt.id);
                                                return `
                                                    <div style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: white; border: 1px solid var(--color-border); border-radius: 6px;">
                                                        <button onclick="toggleFavoritePrompt('${prompt.id}')" style="background: none; border: none; cursor: pointer; padding: 0; font-size: 16px;">
                                                            ${isFavorite ? '⭐' : '☆'}
                                                        </button>
                                                        <span style="flex: 1; font-size: 13px; color: var(--color-primary);">${prompt.text}</span>
                                                        <span style="font-size: 12px; color: var(--color-secondary); padding: 2px 6px; background: var(--color-hover); border-radius: 4px;">
                                                            ${prompt.usageCount} 次
                                                        </span>
                                                        <button class="btn-secondary" style="padding: 4px 8px; font-size: 12px;" onclick="deleteUserPrompt('${prompt.id}')">删除</button>
                                                    </div>
                                                `;
                                            }).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('');
                })()}

                <div style="background: var(--color-hover); border-radius: var(--radius); padding: 16px; margin-top: 16px;">
                    <div style="font-size: 13px; font-weight: 600; margin-bottom: 6px;">💡 提示词库使用说明</div>
                    <ul style="font-size: 12px; color: var(--color-secondary); line-height: 1.8; margin: 0; padding-left: 20px;">
                        <li>预设提示词：团队预先配置的常用提示词，可直接使用</li>
                        <li>我的提示词：自动记录您输入过的提示词，显示使用次数</li>
                        <li>常用提示词：点击星标 ⭐ 标记为常用，方便快速选择</li>
                        <li>在需要输入提示词时，可从提示词库中选择或手动输入</li>
                    </ul>
                </div>
            </div>

            <div style="background: var(--color-surface); border-radius: var(--radius); padding: 30px; margin-bottom: 20px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">尺寸预设管理</h3>
                <div style="display: grid; gap: 16px;">
                    ${AppState.sizePresets.map(preset => `
                        <div style="border: 1px solid var(--color-border); border-radius: var(--radius); padding: 20px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                                <h4 style="font-size: 16px; font-weight: 600;">${preset.name}</h4>
                                <div style="display: flex; gap: 8px;">
                                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 13px;" onclick="editPreset('${preset.id}')">编辑</button>
                                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 13px;" onclick="deletePreset('${preset.id}')">删除</button>
                                </div>
                            </div>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${preset.sizes.map(size => `
                                    <div style="padding: 8px 12px; background: var(--color-hover); border-radius: 6px; display: flex; flex-direction: column; gap: 2px;">
                                        <span style="font-size: 13px; font-family: monospace; font-weight: 500;">
                                            ${size.width}×${size.height}
                                        </span>
                                        ${size.maxSize ? `
                                            <span style="font-size: 11px; color: var(--color-secondary); display: flex; align-items: center; gap: 3px;">
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 1V9M2.5 6.5L5 9L7.5 6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                ≤ ${size.maxSize} KB
                                            </span>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="btn-primary" style="margin-top: 20px;" onclick="createNewPreset()">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    新建预设组合
                </button>
            </div>

            <div style="background: var(--color-surface); border-radius: var(--radius); padding: 30px;">
                <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">系统设置</h3>
                <div style="display: grid; gap: 20px;">
                    <div>
                        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px;">默认图片格式</label>
                        <select class="sort-select">
                            <option>PNG</option>
                            <option>JPG</option>
                            <option>WebP</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px;">默认压缩质量</label>
                        <input type="range" min="1" max="100" value="85" style="width: 100%;">
                        <div style="font-size: 12px; color: var(--color-secondary); margin-top: 4px;">85%</div>
                    </div>
                    <div>
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" checked style="width: 18px; height: 18px;">
                            <span style="font-size: 14px;">自动生成 AI 标签</span>
                        </label>
                    </div>
                    <div>
                        <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                            <input type="checkbox" checked style="width: 18px; height: 18px;">
                            <span style="font-size: 14px;">上传完成后显示通知</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// Interaction Functions
// ============================================================

function switchPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
    }
}

function backToLibrary() {
    AppState.selectedAsset = null;
    AppState.selectedLanguage = null;
    switchPage('libraryPage');
}

function toggleLike(assetId) {
    const asset = AppState.assets.find(a => a.id === assetId);
    if (asset) {
        asset.liked = !asset.liked;

        // If we're on the library page, re-render
        if (AppState.currentPage === 'library') {
            renderAssetLibrary();
        }

        // If we're on the detail page, update the detail view
        if (AppState.selectedAsset && AppState.selectedAsset.id === assetId) {
            showAssetDetail(assetId);
        }

        showNotification(asset.liked ? '已添加到收藏' : '已取消收藏');
    }
}

function switchLanguage(language) {
    AppState.selectedLanguage = language;
    const sizesContainer = document.getElementById('languageSizes');
    if (sizesContainer && AppState.selectedAsset) {
        sizesContainer.innerHTML = renderLanguageSizes(AppState.selectedAsset, language);
    }

    // Update active tab
    document.querySelectorAll('.language-tab').forEach(tab => {
        if (tab.dataset.lang === language) {
            tab.classList.add('active');
            tab.style.background = 'var(--color-primary)';
            tab.style.color = 'white';
        } else {
            tab.classList.remove('active');
            tab.style.background = 'var(--color-surface)';
            tab.style.color = 'var(--color-primary)';
        }
    });
}

function downloadAsset(assetId) {
    showNotification('正在下载原图...');
}

function downloadAllSizes(assetId) {
    showNotification('正在打包下载全部尺寸...');
}

function downloadCurrentLanguage(assetId) {
    showNotification(`正在下载 ${AppState.selectedLanguage} 语言版本...`);
}

function downloadAllLanguages(assetId) {
    showNotification('正在打包下载全部语言版本...');
}

function startAICreation(assetId) {
    AppState.currentPage = 'create';
    switchPage('createPage');
    renderAICreatePage();
    document.querySelector('.nav-item[data-page="create"]').click();
}

function startMultiSize(assetId) {
    AppState.currentPage = 'create';
    switchPage('createPage');
    renderAICreatePage();
    document.querySelector('.nav-item[data-page="create"]').click();
    setTimeout(() => selectTool('multi-size'), 100);
}

function addMoreLanguages(assetId) {
    AppState.currentPage = 'create';
    switchPage('createPage');
    renderAICreatePage();
    document.querySelector('.nav-item[data-page="create"]').click();
    setTimeout(() => selectTool('multilingual'), 100);
}

function editTags(assetId) {
    showNotification('标签编辑功能开发中...');
}

function selectTool(toolName) {
    // Update active tool button
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tool="${toolName}"]`).classList.add('active');

    // Render tool canvas and settings
    const canvas = document.getElementById('toolCanvas');
    const settings = document.getElementById('settingsPanel');

    if (toolName === 'text-to-image') {
        renderTextToImageTool(canvas, settings);
    } else if (toolName === 'multilingual') {
        renderMultilingualTool(canvas, settings);
    } else if (toolName === 'multi-size') {
        renderMultiSizeTool(canvas, settings);
    } else if (toolName === 'remove-bg') {
        renderRemoveBgTool(canvas, settings);
    } else if (toolName === 'upscale') {
        renderUpscaleTool(canvas, settings);
    }
}

function renderTextToImageTool(canvas, settings) {
    canvas.innerHTML = `
        <div style="width: 100%; max-width: 600px; text-align: center;">
            <h3 style="font-size: 24px; font-weight: 500; margin-bottom: 20px;">文生图 / 图生图</h3>
            <div id="textToImagePreview" style="border: 2px dashed var(--color-border); border-radius: var(--radius); padding: 60px 40px; margin-bottom: 20px; background: var(--color-hover); cursor: pointer; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="opacity: 0.3; margin-bottom: 16px;">
                    <path d="M24 8V40M8 24H40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
                <p style="font-size: 16px; color: var(--color-secondary); margin-bottom: 8px;">上传图片或从素材库选择</p>
                <p style="font-size: 13px; color: var(--color-secondary);">支持 JPG, PNG, WebP 格式</p>
            </div>
            <button class="btn-secondary" style="width: 100%;" onclick="openAssetPicker('text-to-image', handleTextToImageAssetSelect)">从素材库选择</button>
        </div>
    `;

    settings.innerHTML = `
        <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">提示词</h3>
        <textarea placeholder="描述你想要生成的图片..." style="width: 100%; min-height: 120px; padding: 12px; border: 1px solid var(--color-border); border-radius: var(--radius); font-size: 14px; font-family: var(--font-body); resize: vertical; margin-bottom: 20px;"></textarea>

        <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">品牌规范</h3>
        <div style="margin-bottom: 20px;">
            <select class="sort-select" style="width: 100%; margin-bottom: 12px;">
                <option>默认品牌风格</option>
                <option>夏季活动风格</option>
                <option>极简风格</option>
            </select>
        </div>

        <button class="btn-primary" style="width: 100%;">生成图片</button>
    `;
}

function renderMultilingualTool(canvas, settings) {
    canvas.innerHTML = `
        <div style="width: 100%; max-width: 700px;">
            <h3 style="font-size: 24px; font-weight: 500; margin-bottom: 30px; text-align: center;">多语言文字替换</h3>

            <!-- Step 1: Upload Image -->
            <div style="background: white; border-radius: var(--radius); padding: 30px; margin-bottom: 20px;">
                <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Step 1: 选择图片</h4>
                <div style="border: 2px dashed var(--color-border); border-radius: var(--radius); padding: 40px; text-align: center; background: var(--color-hover); cursor: pointer; margin-bottom: 12px;" onclick="openAssetPicker('multilingual', handleMultilingualAssetSelect)">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="opacity: 0.3; margin-bottom: 12px;">
                        <path d="M24 8V40M8 24H40" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    <p style="font-size: 14px; color: var(--color-secondary);">上传图片或从素材库选择</p>
                </div>
                <button class="btn-secondary" style="width: 100%;" onclick="openAssetPicker('multilingual', handleMultilingualAssetSelect)">从素材库选择</button>
            </div>

            <!-- Step 2: Language Input -->
            <div style="background: white; border-radius: var(--radius); padding: 30px; margin-bottom: 20px; opacity: 0.5;">
                <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Step 2: 输入多语言文字</h4>
                <p style="font-size: 13px; color: var(--color-secondary); margin-bottom: 12px;">请先选择图片</p>
            </div>

            <!-- Step 3: Preview -->
            <div style="background: white; border-radius: var(--radius); padding: 30px; opacity: 0.5;">
                <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Step 3: 预览与调整</h4>
                <p style="font-size: 13px; color: var(--color-secondary);">请先完成前面的步骤</p>
            </div>
        </div>
    `;

    settings.innerHTML = `
        <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">说明</h3>
        <div style="background: var(--color-hover); padding: 16px; border-radius: var(--radius); font-size: 13px; line-height: 1.6; color: var(--color-secondary);">
            <p style="margin-bottom: 12px;">多语言文字替换工具可以帮助你快速生成多个语言版本的图片素材。</p>
            <p>1. 上传包含文字的图片<br>
            2. 输入要替换的文字内容<br>
            3. 添加多种语言的翻译<br>
            4. 预览并调整每种语言的效果<br>
            5. 一键生成多尺寸版本</p>
        </div>
    `;
}

function renderMultiSizeTool(canvas, settings) {
    const isFromMultilingual = AppState.isMultilingualFlow && AppState.currentMultilingualLanguages.length > 0;

    canvas.innerHTML = `
        <div style="width: 100%; max-width: 900px;">
            ${isFromMultilingual ? `
            <!-- Multilingual Context Banner -->
            <div style="background: linear-gradient(135deg, var(--color-accent) 0%, #c89968 100%); border-radius: var(--radius); padding: 24px; margin-bottom: 30px; color: white; box-shadow: var(--shadow-lg); animation: fadeIn 0.5s ease;">
                <div style="display: flex; gap: 20px; align-items: center;">
                    <div style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="13" stroke="white" stroke-width="2"/>
                            <path d="M8 16H24M16 8C18.5 11 20.5 13.5 20.5 16C20.5 18.5 18.5 21 16 24M16 8C13.5 11 11.5 13.5 11.5 16C11.5 18.5 13.5 21 16 24" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-size: 20px; font-weight: 600; margin-bottom: 8px;">多语言模式已激活</div>
                        <div style="font-size: 14px; opacity: 0.95; line-height: 1.5;">正在为 ${AppState.currentMultilingualLanguages.length} 种语言生成多尺寸版本。选择尺寸后，每种语言将生成对应的所有尺寸。</div>
                        <div style="display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap;">
                            ${AppState.currentMultilingualLanguages.map(lang => `
                                <span style="padding: 6px 12px; background: rgba(255,255,255,0.25); border-radius: 16px; font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 6px;">
                                    <span style="width: 6px; height: 6px; background: white; border-radius: 50%; display: inline-block;"></span>
                                    ${lang}: ${AppState.currentMultilingualTexts[lang]}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    <button class="btn-secondary" onclick="cancelMultilingualMode()" style="flex-shrink: 0; background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 8px 16px;">
                        取消多语言模式
                    </button>
                </div>
            </div>
            ` : ''}

            <h3 style="font-size: 32px; font-weight: 500; margin-bottom: 12px; text-align: center; font-family: var(--font-display);">多尺寸生成</h3>
            <p style="text-align: center; color: var(--color-secondary); font-size: 15px; margin-bottom: 40px;">
                ${isFromMultilingual ? '为每种语言版本生成多个适配不同平台的尺寸' : '一次生成多个尺寸，适配不同平台需求'}
            </p>

            <!-- Step 1: Select Presets -->
            <div style="background: white; border-radius: var(--radius); padding: 30px; margin-bottom: 24px; box-shadow: var(--shadow-md);">
                <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 20px;">Step 1: 选择尺寸组合</h4>
                <p style="font-size: 14px; color: var(--color-secondary); margin-bottom: 20px; line-height: 1.6;">
                    选择预设的尺寸组合，或添加自定义尺寸${isFromMultilingual ? `。<strong>每种语言将生成所选的全部尺寸。</strong>` : '。'}
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;">
                    ${AppState.sizePresets.map(preset => {
                        const sizesWithLimit = preset.sizes.filter(s => s.maxSize).length;
                        return `
                        <div style="border: 2px solid var(--color-border); border-radius: var(--radius); padding: 20px; cursor: pointer; transition: var(--transition);"
                             onmouseover="this.style.borderColor='var(--color-primary)'"
                             onmouseout="this.style.borderColor='var(--color-border)'"
                             onclick="togglePresetSelection('${preset.id}')">
                            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                                <input type="checkbox" id="preset-${preset.id}" style="width: 18px; height: 18px;">
                                <h5 style="font-size: 15px; font-weight: 600;">${preset.name}</h5>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 4px;">
                                <div style="font-size: 12px; color: var(--color-secondary);">${preset.sizes.length} 个尺寸</div>
                                ${sizesWithLimit > 0 ? `
                                    <div style="font-size: 11px; color: var(--color-secondary); display: flex; align-items: center; gap: 4px;">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                            <path d="M5 1V9M2.5 6.5L5 9L7.5 6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        ${sizesWithLimit} 个有大小限制
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
                <div style="display: flex; gap: 12px; margin-top: 16px;">
                    <button class="btn-secondary" style="flex: 1; opacity: 0.5; cursor: not-allowed;" onclick="showSelectedSizes()" disabled>查看已选尺寸</button>
                    <button class="btn-secondary" style="padding: 10px 20px;" onclick="addCustomSizeDirectly()">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="margin-right: 4px;">
                            <path d="M7 2V12M2 7H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        添加自定义尺寸
                    </button>
                </div>
            </div>

            <!-- Selected Sizes -->
            <div id="selectedSizesPreview" style="background: white; border-radius: var(--radius); padding: 30px; margin-bottom: 20px; display: none;">
                <h4 style="font-size: 16px; font-weight: 600; margin-bottom: 20px;">已选择的尺寸</h4>
                <div id="selectedSizesList"></div>
                <button class="btn-primary" style="margin-top: 20px; width: 100%;" onclick="proceedToCropping()">下一步：裁剪预览 →</button>
            </div>
        </div>
    `;

    settings.innerHTML = `
        <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">输入图片</h3>
        <div id="multiSizePreview" style="border: 2px ${AppState.currentSourceImage ? 'solid' : 'dashed'} var(--color-border); border-radius: var(--radius); padding: ${AppState.currentSourceImage ? '20px' : '30px'}; text-align: center; background: var(--color-hover); cursor: pointer; margin-bottom: 20px;">
            ${AppState.currentSourceImage ? `
                <img src="${AppState.currentSourceImage}" style="width: 100%; max-height: 200px; object-fit: contain; border-radius: var(--radius); margin-bottom: 8px;" alt="Source Image">
                <p style="font-size: 13px; font-weight: 500; color: var(--color-primary);">${isFromMultilingual ? '多语言源图片' : '已选择图片'}</p>
                ${isFromMultilingual ? '<p style="font-size: 11px; color: var(--color-secondary); margin-top: 4px;">来自多语言流程</p>' : ''}
            ` : `
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style="opacity: 0.3; margin-bottom: 8px;">
                    <path d="M16 4V28M4 16H28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <p style="font-size: 13px; color: var(--color-secondary);">上传图片</p>
            `}
        </div>
        <button class="btn-secondary" style="width: 100%;" onclick="openAssetPicker('multi-size', handleMultiSizeAssetSelect)">${AppState.currentSourceImage ? '重新选择图片' : '从素材库选择'}</button>

        <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid var(--color-border);">
            <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">组合管理</h3>
            <button class="btn-secondary" style="width: 100%;" onclick="managePresets()">管理预设组合</button>
        </div>
    `;
}

function renderRemoveBgTool(canvas, settings) {
    canvas.innerHTML = `
        <div style="width: 100%; max-width: 600px; text-align: center;">
            <h3 style="font-size: 24px; font-weight: 500; margin-bottom: 20px;">背景透明</h3>
            <div id="removeBgPreview" style="border: 2px dashed var(--color-border); border-radius: var(--radius); padding: 60px 40px; margin-bottom: 20px; background: var(--color-hover); cursor: pointer;">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="opacity: 0.3; margin-bottom: 16px;">
                    <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
                    <circle cx="24" cy="24" r="10" fill="currentColor"/>
                </svg>
                <p style="font-size: 16px; color: var(--color-secondary); margin-bottom: 8px;">上传图片或从素材库选择</p>
                <p style="font-size: 13px; color: var(--color-secondary);">AI 将自动移除背景</p>
            </div>
            <button class="btn-secondary" style="width: 100%;" onclick="openAssetPicker('remove-bg', handleRemoveBgAssetSelect)">从素材库选择</button>
        </div>
    `;

    settings.innerHTML = `
        <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">设置</h3>
        <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 13px; margin-bottom: 8px;">边缘羽化</label>
            <input type="range" min="0" max="10" value="2" style="width: 100%;">
        </div>
        <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;">
                <span style="font-size: 13px;">保留阴影</span>
            </label>
        </div>
        <button class="btn-primary" style="width: 100%;">开始处理</button>
    `;
}

function renderUpscaleTool(canvas, settings) {
    canvas.innerHTML = `
        <div style="width: 100%; max-width: 600px; text-align: center;">
            <h3 style="font-size: 24px; font-weight: 500; margin-bottom: 20px;">高清增强</h3>
            <div id="upscalePreview" style="border: 2px dashed var(--color-border); border-radius: var(--radius); padding: 60px 40px; margin-bottom: 20px; background: var(--color-hover); cursor: pointer;">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="opacity: 0.3; margin-bottom: 16px;">
                    <path d="M8 40L40 8M40 8H24M40 8V24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p style="font-size: 16px; color: var(--color-secondary); margin-bottom: 8px;">上传图片或从素材库选择</p>
                <p style="font-size: 13px; color: var(--color-secondary);">AI 将提升图片分辨率和清晰度</p>
            </div>
            <button class="btn-secondary" style="width: 100%;" onclick="openAssetPicker('upscale', handleUpscaleAssetSelect)">从素材库选择</button>
        </div>
    `;

    settings.innerHTML = `
        <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">增强倍数</h3>
        <select class="sort-select" style="width: 100%; margin-bottom: 20px;">
            <option>2× (推荐)</option>
            <option>4×</option>
            <option>8×</option>
        </select>

        <h3 style="font-size: 14px; font-weight: 600; color: var(--color-secondary); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">增强模式</h3>
        <select class="sort-select" style="width: 100%; margin-bottom: 20px;">
            <option>通用增强</option>
            <option>照片增强</option>
            <option>艺术作品增强</option>
        </select>

        <button class="btn-primary" style="width: 100%;">开始增强</button>
    `;
}

// ============================================================
// Asset Picker Modal Functions
// ============================================================

let currentAssetPickerCallback = null;

function openAssetPicker(toolType, callback) {
    currentAssetPickerCallback = callback || function(asset) {
        showNotification(`已选择素材: ${asset.title}`);
    };

    const modal = document.getElementById('assetPickerModal');
    modal.classList.add('open');
    renderAssetPickerGrid();

    // Setup search
    const searchInput = document.getElementById('assetPickerSearch');
    if (searchInput) {
        searchInput.value = '';
        searchInput.addEventListener('input', (e) => {
            renderAssetPickerGrid(e.target.value);
        });
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeAssetPicker() {
    const modal = document.getElementById('assetPickerModal');
    modal.classList.remove('open');
    currentAssetPickerCallback = null;

    // Restore body scroll
    document.body.style.overflow = '';
}

function renderAssetPickerGrid(searchQuery = '') {
    const grid = document.getElementById('assetPickerGrid');
    let assetsToShow = AppState.assets;

    // Filter by search query
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        assetsToShow = AppState.assets.filter(asset =>
            asset.title.toLowerCase().includes(query) ||
            asset.tags.some(tag => tag.toLowerCase().includes(query)) ||
            asset.creator.toLowerCase().includes(query)
        );
    }

    if (assetsToShow.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: var(--color-secondary);">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style="margin-bottom: 20px; opacity: 0.3;">
                    <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M20 32L28 24L36 32L44 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p style="font-size: 18px; margin-bottom: 8px;">未找到匹配的素材</p>
                <p style="font-size: 14px;">尝试其他关键词</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = assetsToShow.map(asset => {
        const languageChips = asset.type === 'multilingual'
            ? `<div class="language-chips">
                ${asset.languages.map(lang => `<span class="chip">${lang}</span>`).join('')}
               </div>`
            : `<div class="language-chips"><span class="chip">无语言</span></div>`;

        return `
            <div class="asset-card" data-id="${asset.id}" onclick="selectAssetFromPicker('${asset.id}')">
                <img src="${asset.originalImage}" alt="${asset.title}" class="asset-image">
                <div class="asset-info">
                    <div class="asset-header">
                        <h3 class="asset-title">${asset.title}</h3>
                    </div>
                    ${languageChips}
                    <div class="asset-tags">
                        ${asset.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function selectAssetFromPicker(assetId) {
    const asset = AppState.assets.find(a => a.id === assetId);
    if (asset && currentAssetPickerCallback) {
        currentAssetPickerCallback(asset);
    }
    closeAssetPicker();
}

// Asset selection handlers for different tools
function handleTextToImageAssetSelect(asset) {
    const preview = document.getElementById('textToImagePreview');
    if (preview) {
        preview.innerHTML = `
            <img src="${asset.originalImage}" style="width: 100%; max-height: 300px; object-fit: contain; border-radius: var(--radius); margin-bottom: 12px;" alt="${asset.title}">
            <p style="font-size: 14px; font-weight: 500; color: var(--color-primary);">${asset.title}</p>
            <p style="font-size: 12px; color: var(--color-secondary); margin-top: 4px;">已选择素材，可用作图生图参考</p>
        `;
    }
    showNotification(`已选择素材: ${asset.title}`);
}

function handleMultiSizeAssetSelect(asset) {
    // Store source image for cropping
    AppState.currentSourceImage = asset.originalImage;

    const preview = document.getElementById('multiSizePreview');
    if (preview) {
        preview.innerHTML = `
            <img src="${asset.originalImage}" style="width: 100%; max-height: 200px; object-fit: contain; border-radius: var(--radius); margin-bottom: 8px;" alt="${asset.title}">
            <p style="font-size: 13px; font-weight: 500; color: var(--color-primary);">${asset.title}</p>
        `;
        preview.style.padding = '20px';
    }
    showNotification(`已选择素材: ${asset.title}`);
}

function handleRemoveBgAssetSelect(asset) {
    const preview = document.getElementById('removeBgPreview');
    if (preview) {
        preview.innerHTML = `
            <img src="${asset.originalImage}" style="width: 100%; max-height: 300px; object-fit: contain; border-radius: var(--radius); margin-bottom: 12px;" alt="${asset.title}">
            <p style="font-size: 14px; font-weight: 500; color: var(--color-primary);">${asset.title}</p>
            <p style="font-size: 12px; color: var(--color-secondary); margin-top: 4px;">准备移除背景</p>
        `;
    }
    showNotification(`已选择素材: ${asset.title}`);
}

function handleUpscaleAssetSelect(asset) {
    const preview = document.getElementById('upscalePreview');
    if (preview) {
        preview.innerHTML = `
            <img src="${asset.originalImage}" style="width: 100%; max-height: 300px; object-fit: contain; border-radius: var(--radius); margin-bottom: 12px;" alt="${asset.title}">
            <p style="font-size: 14px; font-weight: 500; color: var(--color-primary);">${asset.title}</p>
            <p style="font-size: 12px; color: var(--color-secondary); margin-top: 4px;">准备进行高清增强</p>
        `;
    }
    showNotification(`已选择素材: ${asset.title}`);
}

function handleMultilingualAssetSelect(asset) {
    // Store asset for multilingual processing
    AppState.currentMultilingualAsset = asset;
    AppState.currentMultilingualLanguages = [];

    const canvas = document.getElementById('toolCanvas');
    if (canvas) {
        canvas.innerHTML = `
            <div style="width: 100%; max-width: 800px;">
                <!-- Progress Indicator -->
                <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 40px; padding: 20px; background: white; border-radius: var(--radius); box-shadow: var(--shadow-sm);">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px;">✓</div>
                            <div style="font-size: 13px; font-weight: 600; color: var(--color-primary);">选择图片</div>
                        </div>
                        <div style="width: 50px; height: 2px; background: var(--color-primary);"></div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px;">2</div>
                            <div style="font-size: 13px; font-weight: 600; color: var(--color-primary);">输入文字</div>
                        </div>
                        <div style="width: 50px; height: 2px; background: var(--color-border);"></div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--color-border); color: var(--color-secondary); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px;">3</div>
                            <div style="font-size: 13px; color: var(--color-secondary);">生成预览</div>
                        </div>
                    </div>
                </div>

                <h3 style="font-size: 32px; font-weight: 500; margin-bottom: 12px; text-align: center; font-family: var(--font-display);">多语言文字替换</h3>
                <p style="text-align: center; color: var(--color-secondary); font-size: 15px; margin-bottom: 40px;">一次输入，自动生成多个语言版本的创意素材</p>

                <!-- Step 1: Selected Image -->
                <div style="background: white; border-radius: var(--radius); padding: 30px; margin-bottom: 24px; box-shadow: var(--shadow-md); border-left: 4px solid var(--color-primary);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 16px;">✓</div>
                        <h4 style="font-size: 18px; font-weight: 600; color: var(--color-primary);">Step 1: 已选择图片</h4>
                    </div>
                    <div style="display: flex; gap: 20px; align-items: center;">
                        <img src="${asset.originalImage}" style="width: 150px; height: 150px; object-fit: cover; border-radius: var(--radius);" alt="${asset.title}">
                        <div>
                            <div style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">${asset.title}</div>
                            <div style="font-size: 13px; color: var(--color-secondary); margin-bottom: 12px;">${asset.tags.join(', ')}</div>
                            <button class="btn-secondary" style="padding: 6px 12px; font-size: 13px;" onclick="openAssetPicker('multilingual', handleMultilingualAssetSelect)">重新选择</button>
                        </div>
                    </div>
                </div>

                <!-- Step 2: Language Input -->
                <div style="background: white; border-radius: var(--radius); padding: 30px; margin-bottom: 24px; box-shadow: var(--shadow-md); border-left: 4px solid var(--color-primary);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 16px;">2</div>
                        <h4 style="font-size: 18px; font-weight: 600; color: var(--color-primary);">Step 2: 输入多语言文字</h4>
                    </div>

                    <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 16px; border-radius: var(--radius); margin-bottom: 20px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2Z" stroke="#6b6b6b" stroke-width="1.5"/>
                                <path d="M10 6V10L13 12" stroke="#6b6b6b" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span style="font-size: 13px; color: var(--color-secondary); font-weight: 500;">提示：输入您想要替换的文字内容，系统将自动应用到所选图片上</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 10px; color: var(--color-primary);">原始文字描述（可选）</label>
                        <input type="text"
                               id="textToReplace"
                               placeholder="例如：SALE 50% OFF"
                               style="width: 100%; padding: 12px 16px; border: 2px solid var(--color-border); border-radius: var(--radius); font-size: 14px; transition: var(--transition);"
                               value="SUMMER SALE"
                               onfocus="this.style.borderColor='var(--color-primary)'"
                               onblur="this.style.borderColor='var(--color-border)'">
                    </div>

                    <div style="margin-bottom: 20px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <label style="font-size: 14px; font-weight: 600; color: var(--color-primary);">多语言内容</label>
                            <div style="display: flex; gap: 8px;">
                                <button class="btn-secondary" style="padding: 6px 12px; font-size: 12px; display: flex; align-items: center; gap: 6px;" onclick="showNotification('AI 辅助翻译功能开发中...')">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M7 1L9 6H13L9.5 9L11 13L7 10L3 13L4.5 9L1 6H5L7 1Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                                    </svg>
                                    AI 翻译
                                </button>
                            </div>
                        </div>

                        <div style="display: grid; gap: 16px;">
                            <div style="background: white; border: 2px solid var(--color-border); border-radius: var(--radius); overflow: hidden; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
                                <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);">
                                    <div style="width: 100px; font-size: 13px; font-weight: 600; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
                                        <span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: #3498db; color: white; text-align: center; line-height: 24px; font-size: 11px; font-weight: 600;">EN</span>
                                        English
                                    </div>
                                    <input type="text"
                                           id="lang-EN"
                                           placeholder="Enter English text..."
                                           value="${AppState.currentMultilingualTexts['EN'] || 'SUMMER SALE'}"
                                           style="flex: 1; padding: 8px 12px; border: none; font-size: 14px; background: transparent; outline: none;">
                                </div>
                            </div>

                            <div style="background: white; border: 2px solid var(--color-border); border-radius: var(--radius); overflow: hidden; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
                                <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);">
                                    <div style="width: 100px; font-size: 13px; font-weight: 600; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
                                        <span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: #2ecc71; color: white; text-align: center; line-height: 24px; font-size: 11px; font-weight: 600;">AR</span>
                                        العربية
                                    </div>
                                    <input type="text"
                                           id="lang-AR"
                                           placeholder="أدخل النص العربي..."
                                           value="${AppState.currentMultilingualTexts['AR'] || 'تخفيضات الصيف'}"
                                           style="flex: 1; padding: 8px 12px; border: none; font-size: 14px; background: transparent; outline: none;"
                                           dir="rtl">
                                </div>
                            </div>

                            <div style="background: white; border: 2px solid var(--color-border); border-radius: var(--radius); overflow: hidden; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
                                <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);">
                                    <div style="width: 100px; font-size: 13px; font-weight: 600; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
                                        <span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: #e74c3c; color: white; text-align: center; line-height: 24px; font-size: 11px; font-weight: 600;">FR</span>
                                        Français
                                    </div>
                                    <input type="text"
                                           id="lang-FR"
                                           placeholder="Entrez le texte français..."
                                           value="${AppState.currentMultilingualTexts['FR'] || 'SOLDES D\'ÉTÉ'}"
                                           style="flex: 1; padding: 8px 12px; border: none; font-size: 14px; background: transparent; outline: none;">
                                </div>
                            </div>

                            <div style="background: white; border: 2px solid var(--color-border); border-radius: var(--radius); overflow: hidden; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
                                <div style="display: flex; align-items: center; padding: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);">
                                    <div style="width: 100px; font-size: 13px; font-weight: 600; color: var(--color-primary); display: flex; align-items: center; gap: 8px;">
                                        <span style="display: inline-block; width: 24px; height: 24px; border-radius: 4px; background: #f39c12; color: white; text-align: center; line-height: 24px; font-size: 11px; font-weight: 600;">ZH</span>
                                        中文
                                    </div>
                                    <input type="text"
                                           id="lang-ZH"
                                           placeholder="输入中文内容..."
                                           value="${AppState.currentMultilingualTexts['ZH'] || '夏季大促'}"
                                           style="flex: 1; padding: 8px 12px; border: none; font-size: 14px; background: transparent; outline: none;">
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="btn-secondary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 16px;">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 3V13M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        添加更多语言
                    </button>
                </div>

                <!-- Step 3: Preview -->
                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: var(--radius); padding: 30px; box-shadow: var(--shadow-sm); border: 2px dashed var(--color-border);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--color-border); color: var(--color-secondary); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 16px;">3</div>
                        <h4 style="font-size: 18px; font-weight: 600; color: var(--color-secondary);">Step 3: 生成预览</h4>
                        <div id="languageCounter" style="margin-left: auto; padding: 6px 12px; background: var(--color-hover); border-radius: 16px; font-size: 13px; font-weight: 500; color: var(--color-secondary); display: none;">
                            <span id="languageCountText">已填写 0 种语言</span>
                        </div>
                    </div>
                    <p style="font-size: 14px; color: var(--color-secondary); margin-bottom: 20px; line-height: 1.6;">
                        填写完成后，点击下方按钮生成多语言预览。系统将为每种语言生成对应的图片版本，您可以实时查看并调整。
                    </p>
                    <button id="generatePreviewBtn" class="btn-primary" style="width: 100%; padding: 14px 24px; font-size: 15px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 10px; opacity: 0.5; cursor: not-allowed;" onclick="generateMultilingualPreview()" disabled>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span id="generateBtnText">生成多语言预览</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        // Add real-time input tracking
        setTimeout(() => {
            const updateLanguageCounter = () => {
                const languages = ['EN', 'AR', 'FR', 'ZH'];
                let filledCount = 0;

                languages.forEach(lang => {
                    const input = document.getElementById(`lang-${lang}`);
                    if (input && input.value.trim()) {
                        filledCount++;
                    }
                });

                const counter = document.getElementById('languageCounter');
                const countText = document.getElementById('languageCountText');
                const generateBtn = document.getElementById('generatePreviewBtn');
                const generateBtnText = document.getElementById('generateBtnText');

                if (counter && countText) {
                    if (filledCount > 0) {
                        counter.style.display = 'block';
                        countText.textContent = `已填写 ${filledCount} 种语言`;

                        // Update counter color based on count
                        if (filledCount >= 3) {
                            counter.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
                            counter.style.color = 'white';
                        } else if (filledCount >= 2) {
                            counter.style.background = 'linear-gradient(135deg, #f39c12, #e67e22)';
                            counter.style.color = 'white';
                        } else {
                            counter.style.background = 'var(--color-hover)';
                            counter.style.color = 'var(--color-secondary)';
                        }
                    } else {
                        counter.style.display = 'none';
                    }
                }

                if (generateBtn && generateBtnText) {
                    if (filledCount > 0) {
                        generateBtn.disabled = false;
                        generateBtn.style.opacity = '1';
                        generateBtn.style.cursor = 'pointer';
                        generateBtnText.textContent = `生成 ${filledCount} 种语言预览`;
                    } else {
                        generateBtn.disabled = true;
                        generateBtn.style.opacity = '0.5';
                        generateBtn.style.cursor = 'not-allowed';
                        generateBtnText.textContent = '请先输入至少一种语言';
                    }
                }
            };

            // Attach input listeners to all language fields
            ['EN', 'AR', 'FR', 'ZH'].forEach(lang => {
                const input = document.getElementById(`lang-${lang}`);
                if (input) {
                    input.addEventListener('input', updateLanguageCounter);
                }
            });

            // Initial update
            updateLanguageCounter();
        }, 100);
    }
    showNotification(`已选择素材: ${asset.title}`);
}

function generateMultilingualPreview() {
    // Collect language inputs
    const languages = ['EN', 'AR', 'FR', 'ZH'];
    const languageTexts = {};
    const generatedLanguages = [];

    languages.forEach(lang => {
        const input = document.getElementById(`lang-${lang}`);
        if (input && input.value.trim()) {
            languageTexts[lang] = input.value.trim();
            generatedLanguages.push(lang);
        }
    });

    if (generatedLanguages.length === 0) {
        showNotification('请至少输入一种语言的文字', 'error');
        return;
    }

    showNotification('正在生成多语言版本...');

    // Simulate AI processing
    setTimeout(() => {
        // Store multilingual data
        AppState.currentMultilingualLanguages = generatedLanguages;
        AppState.currentMultilingualTexts = languageTexts;
        AppState.currentMultilingualPreviews = {};

        // Generate mock preview URLs for each language
        generatedLanguages.forEach(lang => {
            AppState.currentMultilingualPreviews[lang] = AppState.currentMultilingualAsset.originalImage;
        });

        // Render preview interface
        renderMultilingualPreview();
        showNotification('预览生成完成！');
    }, 2000);
}

function renderMultilingualPreview() {
    const canvas = document.getElementById('toolCanvas');
    const firstLanguage = AppState.currentMultilingualLanguages[0];

    // Set initial preview language
    if (!AppState.currentPreviewLanguage) {
        AppState.currentPreviewLanguage = firstLanguage;
    }

    // Get language color map
    const languageColors = {
        'EN': '#3498db',
        'AR': '#2ecc71',
        'FR': '#e74c3c',
        'ZH': '#f39c12',
        'ES': '#9b59b6'
    };

    canvas.innerHTML = `
        <div style="width: 100%; max-width: 1000px;">
            <!-- Header with Progress -->
            <div style="background: white; border-radius: var(--radius); padding: 24px; margin-bottom: 24px; box-shadow: var(--shadow-md);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3 style="font-size: 32px; font-weight: 500; margin-bottom: 8px; font-family: var(--font-display);">多语言预览</h3>
                        <p style="color: var(--color-secondary); font-size: 14px;">已成功生成 ${AppState.currentMultilingualLanguages.length} 种语言版本，可切换预览或直接进入多尺寸生成</p>
                    </div>
                    <button class="btn-secondary" onclick="backToMultilingualEdit()" style="display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        返回编辑
                    </button>
                </div>
            </div>

            <!-- Language Tabs -->
            <div style="background: white; border-radius: var(--radius); padding: 30px; margin-bottom: 24px; box-shadow: var(--shadow-md);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <h4 style="font-size: 18px; font-weight: 600;">语言切换</h4>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn-secondary" style="padding: 6px 12px; font-size: 13px; display: flex; align-items: center; gap: 6px;" onclick="aiAdjustMultilingualLayout()">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1L9 6H13L9.5 9L11 13L7 10L3 13L4.5 9L1 6H5L7 1Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>
                            AI 优化
                        </button>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 24px;">
                    ${AppState.currentMultilingualLanguages.map(lang => {
                        const isActive = lang === AppState.currentPreviewLanguage;
                        const bgColor = languageColors[lang] || '#6b6b6b';
                        return `
                        <button class="language-preview-tab"
                                data-lang="${lang}"
                                onclick="switchPreviewLanguage('${lang}')"
                                style="padding: 16px; border-radius: var(--radius); border: 3px solid ${isActive ? bgColor : 'var(--color-border)'}; background: ${isActive ? bgColor : 'white'}; color: ${isActive ? 'white' : 'var(--color-primary)'}; cursor: pointer; transition: var(--transition); font-size: 14px; display: flex; flex-direction: column; align-items: center; gap: 8px; position: relative; overflow: hidden;">
                            ${isActive ? '<div style="position: absolute; top: 8px; right: 8px; width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; font-size: 16px;">✓</div>' : ''}
                            <div style="font-size: 20px; font-weight: 700;">${lang}</div>
                            <div style="font-size: 13px; opacity: ${isActive ? '0.95' : '0.7'}; text-align: center; line-height: 1.4;">${AppState.currentMultilingualTexts[lang]}</div>
                        </button>
                    `;
                    }).join('')}
                </div>

                <!-- Preview Image -->
                <div id="multilingualPreviewContainer" style="position: relative; background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%), linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%); background-size: 30px 30px; background-position: 0 0, 15px 15px; border-radius: var(--radius); overflow: hidden; min-height: 400px; display: flex; align-items: center; justify-content: center;">
                    <img src="${AppState.currentMultilingualPreviews[AppState.currentPreviewLanguage]}"
                         style="max-width: 100%; max-height: 500px; object-fit: contain; border-radius: var(--radius);"
                         alt="Preview ${AppState.currentPreviewLanguage}">
                    <div style="position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.8); color: white; padding: 8px 16px; border-radius: var(--radius); font-size: 14px; font-weight: 600;">
                        ${AppState.currentPreviewLanguage}: ${AppState.currentMultilingualTexts[AppState.currentPreviewLanguage]}
                    </div>
                </div>

                <!-- AI Adjustment (Optional) -->
                <div style="margin-top: 20px; padding: 16px; background: var(--color-hover); border-radius: var(--radius);">
                    <div style="display: flex; gap: 12px; align-items: center;">
                        <div style="flex: 1;">
                            <div style="font-size: 13px; font-weight: 600; margin-bottom: 4px;">不满意当前排版？</div>
                            <div style="font-size: 12px; color: var(--color-secondary);">可使用 AI 调整文字位置、大小和排版</div>
                        </div>
                        <button class="btn-secondary" onclick="aiAdjustMultilingualLayout()">AI 优化排版</button>
                    </div>
                </div>
            </div>

            <!-- Next Step: Multi-Size -->
            <div style="background: white; border-radius: var(--radius); padding: 30px; border: 2px solid var(--color-accent);">
                <div style="display: flex; gap: 24px; align-items: center;">
                    <div style="flex: 1;">
                        <h4 style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">准备生成多尺寸</h4>
                        <p style="font-size: 14px; color: var(--color-secondary); margin-bottom: 4px;">
                            已生成 ${AppState.currentMultilingualLanguages.length} 种语言版本
                        </p>
                        <div style="display: flex; gap: 6px; margin-top: 12px; flex-wrap: wrap;">
                            ${AppState.currentMultilingualLanguages.map(lang => `
                                <span class="chip" style="background: var(--color-accent); color: white;">${lang}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <button class="btn-primary" onclick="proceedToMultiSizeFromMultilingual()" style="padding: 12px 32px; font-size: 15px;">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-right: 8px;">
                                <rect x="2" y="2" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                                <rect x="11" y="2" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                                <rect x="2" y="11" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                                <rect x="11" y="11" width="7" height="7" stroke="currentColor" stroke-width="1.5"/>
                            </svg>
                            进入多尺寸生成 →
                        </button>
                        <button class="btn-secondary" onclick="saveMultilingualOnly()" style="padding: 10px 24px;">仅保存多语言版本</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function switchPreviewLanguage(language) {
    AppState.currentPreviewLanguage = language;

    // Language color mapping (consistent with render)
    const languageColors = {
        'EN': '#3498db',
        'AR': '#2ecc71',
        'FR': '#e74c3c',
        'ZH': '#f39c12',
        'ES': '#9b59b6'
    };

    // Update tabs with language-specific colors
    document.querySelectorAll('.language-preview-tab').forEach(tab => {
        const lang = tab.dataset.lang;
        const bgColor = languageColors[lang] || '#6b6b6b';

        if (lang === language) {
            tab.style.borderColor = bgColor;
            tab.style.background = bgColor;
            tab.style.color = 'white';
        } else {
            tab.style.borderColor = 'var(--color-border)';
            tab.style.background = 'white';
            tab.style.color = 'var(--color-primary)';
        }
    });

    // Update preview image
    const container = document.getElementById('multilingualPreviewContainer');
    if (container) {
        container.innerHTML = `
            <img src="${AppState.currentMultilingualPreviews[language]}"
                 style="max-width: 100%; max-height: 500px; object-fit: contain; border-radius: var(--radius); animation: fadeIn 0.3s ease;"
                 alt="Preview ${language}">
            <div style="position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.8); color: white; padding: 8px 16px; border-radius: var(--radius); font-size: 14px; font-weight: 600;">
                ${language}: ${AppState.currentMultilingualTexts[language]}
            </div>
        `;
    }
}

function backToMultilingualEdit() {
    // Re-render multilingual tool with current asset
    if (AppState.currentMultilingualAsset) {
        handleMultilingualAssetSelect(AppState.currentMultilingualAsset);
    }
}

function aiAdjustMultilingualLayout() {
    const currentLang = AppState.currentPreviewLanguage;

    // Open prompt selector instead of window.prompt
    openPromptSelector('multilingual-layout', (promptText) => {
        showNotification('AI 正在优化排版...');
        setTimeout(() => {
            showNotification('排版优化完成！');
            // In real implementation, this would update the preview based on promptText
        }, 1500);
    });
}

function proceedToMultiSizeFromMultilingual() {
    showNotification('正在切换到多尺寸生成...');

    // Store that we're coming from multilingual flow
    AppState.isMultilingualFlow = true;

    // Automatically set the source image from multilingual asset
    if (AppState.currentMultilingualAsset) {
        AppState.currentSourceImage = AppState.currentMultilingualAsset.originalImage;
    }

    // Switch to multi-size tool
    selectTool('multi-size');

    // Show success notification with context
    setTimeout(() => {
        const langCount = AppState.currentMultilingualLanguages.length;
        showNotification(`已进入多尺寸生成，将为 ${langCount} 种语言分别生成多个尺寸`);

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

function saveMultilingualOnly() {
    showNotification('正在保存多语言版本...');

    setTimeout(() => {
        showNotification('多语言版本已保存到素材库！');
        // Navigate to library
        switchPage('libraryPage');
        renderAssetLibrary();
        document.querySelector('.nav-item[data-page="library"]').click();
    }, 1500);
}

function cancelMultilingualMode() {
    if (confirm('确定要取消多语言模式吗？多语言上下文将被清除。')) {
        // Clear multilingual flow state
        AppState.isMultilingualFlow = false;
        AppState.currentMultilingualLanguages = [];
        AppState.currentMultilingualTexts = {};
        AppState.currentMultilingualPreviews = {};
        AppState.currentPreviewLanguage = null;

        // Re-render multi-size tool without multilingual context
        const canvas = document.getElementById('toolCanvas');
        const settings = document.getElementById('settingsPanel');
        renderMultiSizeTool(canvas, settings);

        showNotification('已退出多语言模式');
    }
}

function togglePresetSelection(presetId) {
    const checkbox = document.getElementById(`preset-${presetId}`);
    if (checkbox) {
        checkbox.checked = !checkbox.checked;

        // Update visual feedback for the card
        const card = checkbox.closest('div[onclick]');
        if (card) {
            if (checkbox.checked) {
                card.style.borderColor = 'var(--color-primary)';
                card.style.background = 'linear-gradient(135deg, rgba(26,26,26,0.03) 0%, rgba(26,26,26,0.05) 100%)';
                card.style.boxShadow = 'var(--shadow-md)';
            } else {
                card.style.borderColor = 'var(--color-border)';
                card.style.background = 'white';
                card.style.boxShadow = 'none';
            }
        }

        // Update the "查看已选尺寸" button state
        updateShowSelectedSizesButton();
    }
}

function updateShowSelectedSizesButton() {
    const selectedCount = AppState.sizePresets.filter(preset => {
        const checkbox = document.getElementById(`preset-${preset.id}`);
        return checkbox && checkbox.checked;
    }).length;

    const showSizesBtn = document.querySelector('button[onclick="showSelectedSizes()"]');
    if (showSizesBtn) {
        if (selectedCount > 0) {
            showSizesBtn.textContent = `查看已选尺寸 (${selectedCount}) →`;
            showSizesBtn.disabled = false;
            showSizesBtn.style.opacity = '1';
            showSizesBtn.style.cursor = 'pointer';
        } else {
            showSizesBtn.textContent = '请先选择至少一个尺寸组合';
            showSizesBtn.disabled = true;
            showSizesBtn.style.opacity = '0.5';
            showSizesBtn.style.cursor = 'not-allowed';
        }
    }
}

function showSelectedSizes() {
    const selectedPresets = AppState.sizePresets.filter(preset => {
        const checkbox = document.getElementById(`preset-${preset.id}`);
        return checkbox && checkbox.checked;
    });

    if (selectedPresets.length === 0) {
        showNotification('请先选择至少一个尺寸组合', 'error');
        return;
    }

    // Collect all unique sizes
    const allSizes = [];
    selectedPresets.forEach(preset => {
        preset.sizes.forEach(size => {
            // Check for duplicates
            const exists = allSizes.find(s =>
                s.width === size.width &&
                s.height === size.height &&
                s.transparent === size.transparent &&
                s.maxSize === size.maxSize
            );
            if (!exists) {
                allSizes.push({...size, presetName: preset.name});
            }
        });
    });

    // Store in AppState
    AppState.selectedSizesForGeneration = allSizes;

    renderSelectedSizesList();

    const previewDiv = document.getElementById('selectedSizesPreview');
    previewDiv.style.display = 'block';
    previewDiv.scrollIntoView({ behavior: 'smooth' });
}

function renderSelectedSizesList() {
    const listDiv = document.getElementById('selectedSizesList');

    listDiv.innerHTML = `
        <div style="display: grid; gap: 12px;">
            ${AppState.selectedSizesForGeneration.map((size, index) => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--color-hover); border-radius: 6px;">
                    <div>
                        <div style="font-size: 14px; font-weight: 500; font-family: monospace; margin-bottom: 4px;">${size.width} × ${size.height} px</div>
                        <div style="font-size: 12px; color: var(--color-secondary); display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                            ${size.transparent ? '<span style="display: flex; align-items: center; gap: 3px;">✓ 透明背景</span>' : ''}
                            ${size.maxSize ? `
                                <span style="display: flex; align-items: center; gap: 3px;">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M6 1V11M3 8L6 11L9 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    ≤ ${size.maxSize} KB
                                </span>
                            ` : ''}
                            ${size.formats ? `<span>格式: ${size.formats.join(', ').toUpperCase()}</span>` : ''}
                            ${size.presetName ? `<span style="opacity: 0.6;">• 来自 ${size.presetName}</span>` : '<span style="opacity: 0.6;">• 自定义</span>'}
                        </div>
                    </div>
                    <button class="btn-secondary" style="padding: 4px 8px; font-size: 12px;" onclick="removeSizeFromSelection(${index})">移除</button>
                </div>
            `).join('')}
        </div>
        <button class="btn-secondary" style="margin-top: 12px; width: 100%;" onclick="addCustomSize()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="margin-right: 4px;">
                <path d="M7 2V12M2 7H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            添加自定义尺寸
        </button>
    `;
}

function addCustomSize() {
    // Open custom size modal
    document.getElementById('customSizeModal').classList.add('open');
}

function addCustomSizeDirectly() {
    // Initialize selected sizes array if empty
    if (AppState.selectedSizesForGeneration.length === 0) {
        // Show the preview section
        const previewDiv = document.getElementById('selectedSizesPreview');
        previewDiv.style.display = 'block';
        renderSelectedSizesList();
    }

    // Open custom size modal
    addCustomSize();
}

function closeCustomSizeModal() {
    document.getElementById('customSizeModal').classList.remove('open');

    // Clear inputs
    document.getElementById('customSizeWidth').value = '';
    document.getElementById('customSizeHeight').value = '';
    document.getElementById('customSizeMaxSize').value = '';
}

function saveCustomSize() {
    const widthInput = document.getElementById('customSizeWidth');
    const heightInput = document.getElementById('customSizeHeight');
    const maxSizeInput = document.getElementById('customSizeMaxSize');

    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    const maxSize = maxSizeInput.value ? parseInt(maxSizeInput.value) : null;

    // Validation
    if (!width || !height || width <= 0 || height <= 0) {
        showNotification('请输入有效的宽度和高度', 'error');
        return;
    }

    if (maxSize !== null && maxSize <= 0) {
        showNotification('文件大小限制必须大于 0', 'error');
        return;
    }

    // Check for duplicates
    const duplicate = AppState.selectedSizesForGeneration.find(s =>
        s.width === width &&
        s.height === height
    );

    if (duplicate) {
        showNotification('该尺寸已存在于列表中', 'error');
        return;
    }

    // Add custom size to selection
    AppState.selectedSizesForGeneration.push({
        width,
        height,
        maxSize,
        transparent: false,
        formats: ['png', 'jpg'],
        presetName: null // null indicates custom size
    });

    // Re-render list
    renderSelectedSizesList();

    // Close modal
    closeCustomSizeModal();

    const sizeInfo = maxSize ? `${width}×${height} (最大 ${maxSize} KB)` : `${width}×${height}`;
    showNotification(`已添加自定义尺寸 ${sizeInfo}`, 'success');

    // Show the selected sizes preview if it's hidden
    const previewDiv = document.getElementById('selectedSizesPreview');
    if (previewDiv.style.display === 'none') {
        previewDiv.style.display = 'block';
    }
}

function removeSizeFromSelection(index) {
    if (index >= 0 && index < AppState.selectedSizesForGeneration.length) {
        const size = AppState.selectedSizesForGeneration[index];
        AppState.selectedSizesForGeneration.splice(index, 1);

        // Re-render list
        renderSelectedSizesList();

        const sizeInfo = `${size.width}×${size.height}`;
        showNotification(`已移除尺寸 ${sizeInfo}`, 'success');

        // Hide preview if no sizes left
        if (AppState.selectedSizesForGeneration.length === 0) {
            document.getElementById('selectedSizesPreview').style.display = 'none';
        }
    }
}

function proceedToCropping() {
    // Use sizes from AppState.selectedSizesForGeneration (includes custom sizes)
    if (AppState.selectedSizesForGeneration.length === 0) {
        showNotification('请先选择至少一个尺寸', 'error');
        return;
    }

    // Add cropping state to each size
    const allSizes = AppState.selectedSizesForGeneration.map(size => ({
        ...size,
        // Add cropping state
        scale: 100,
        offsetX: 0,
        offsetY: 0
    }));

    // Save to state
    AppState.currentCroppingSizes = allSizes;

    // Use selected image or default mock image
    if (!AppState.currentSourceImage) {
        AppState.currentSourceImage = 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800';
    }

    // Initialize multilingual cropping state
    if (AppState.isMultilingualFlow && AppState.currentMultilingualLanguages.length > 0) {
        // Set first language as current
        AppState.currentCroppingLanguage = AppState.currentMultilingualLanguages[0];

        // Initialize cropping params for each language with deep copy of sizes
        AppState.multilingualCroppingParams = {};
        AppState.currentMultilingualLanguages.forEach(lang => {
            AppState.multilingualCroppingParams[lang] = JSON.parse(JSON.stringify(allSizes));
        });
    } else {
        AppState.currentCroppingLanguage = null;
        AppState.multilingualCroppingParams = {};
    }

    // Render cropping interface
    renderCroppingInterface();
}

function renderCroppingInterface() {
    const canvas = document.getElementById('toolCanvas');

    // Check if we're in multilingual flow
    const isMultilingual = AppState.isMultilingualFlow && AppState.currentMultilingualLanguages.length > 0;
    const languageCount = isMultilingual ? AppState.currentMultilingualLanguages.length : 1;
    const totalImages = AppState.currentCroppingSizes.length * languageCount;

    canvas.innerHTML = `
        <div style="width: 100%; max-width: 1000px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                <div>
                    <h3 style="font-size: 24px; font-weight: 500; margin-bottom: 8px;">裁剪预览</h3>
                    <p style="font-size: 14px; color: var(--color-secondary);">
                        ${isMultilingual ? `将为每种语言生成 ${AppState.currentCroppingSizes.length} 个尺寸，共 ${totalImages} 张图片` : `调整每个尺寸的缩放和位置，满意后点击"一键处理全部"`}
                    </p>
                </div>
                <button class="btn-secondary" onclick="backToSizeSelection()">← 返回选择尺寸</button>
            </div>

            ${isMultilingual ? `
            <!-- Multilingual Info -->
            <div style="background: linear-gradient(135deg, var(--color-accent) 0%, #c89968 100%); border-radius: var(--radius); padding: 20px; margin-bottom: 20px; color: white;">
                <div style="display: flex; gap: 20px; align-items: center;">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="flex-shrink: 0;">
                        <circle cx="24" cy="24" r="20" stroke="white" stroke-width="2"/>
                        <path d="M12 24H36M24 12C27 15 29 19 29 24C29 29 27 33 24 36M24 12C21 15 19 19 19 24C19 29 21 33 24 36" stroke="white" stroke-width="2"/>
                    </svg>
                    <div style="flex: 1;">
                        <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">多语言模式</div>
                        <div style="font-size: 13px; opacity: 0.9;">正在处理 ${AppState.currentMultilingualLanguages.length} 种语言版本 • 为每种语言独立调整裁剪参数</div>
                        <div style="display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap;">
                            ${AppState.currentMultilingualLanguages.map(lang => `
                                <span style="padding: 4px 10px; background: rgba(255,255,255,0.2); border-radius: 12px; font-size: 12px; font-weight: 500;">${lang}: ${AppState.currentMultilingualTexts[lang]}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Language Switcher -->
            <div style="background: white; border: 1px solid var(--color-border); border-radius: var(--radius); padding: 20px; margin-bottom: 30px;">
                <div style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--color-primary);">切换语言预览</div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                    ${AppState.currentMultilingualLanguages.map(lang => {
                        const languageColors = {
                            'EN': '#3498db',
                            'AR': '#2ecc71',
                            'FR': '#e74c3c',
                            'ZH': '#f39c12',
                            'ES': '#9b59b6'
                        };
                        const bgColor = languageColors[lang] || '#6b6b6b';
                        const isActive = AppState.currentCroppingLanguage === lang;

                        return `
                            <button
                                onclick="switchCroppingLanguage('${lang}')"
                                style="
                                    padding: 14px 20px;
                                    border: 2px solid ${isActive ? bgColor : 'var(--color-border)'};
                                    background: ${isActive ? bgColor : 'white'};
                                    color: ${isActive ? 'white' : 'var(--color-primary)'};
                                    border-radius: var(--radius);
                                    cursor: pointer;
                                    transition: all 0.2s ease;
                                    font-weight: ${isActive ? '600' : '500'};
                                    font-size: 14px;
                                    position: relative;
                                    box-shadow: ${isActive ? 'var(--shadow-md)' : 'none'};
                                    display: flex;
                                    flex-direction: column;
                                    align-items: flex-start;
                                    gap: 4px;
                                "
                            >
                                <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                                    <span style="font-size: 16px; font-weight: 600;">${lang}</span>
                                    ${isActive ? `<span style="font-size: 18px;">✓</span>` : ''}
                                </div>
                                <span style="font-size: 12px; opacity: 0.9;">${AppState.currentMultilingualTexts[lang]}</span>
                            </button>
                        `;
                    }).join('')}
                </div>
                <div style="margin-top: 12px; padding: 12px; background: var(--color-hover); border-radius: 6px; font-size: 12px; color: var(--color-secondary);">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="display: inline-block; vertical-align: middle; margin-right: 4px;">
                        <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M7 4V7L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    当前正在为 <strong>${AppState.currentCroppingLanguage}</strong> 语言调整裁剪参数。每种语言可以独立设置缩放和位置。
                </div>
            </div>
            ` : ''}

            <!-- Source Image Info -->
            <div style="background: var(--color-surface); border-radius: var(--radius); padding: 20px; margin-bottom: 30px; border: 1px solid var(--color-border);">
                <div style="display: flex; gap: 20px; align-items: center;">
                    <img src="${AppState.currentSourceImage}" style="width: 100px; height: 100px; object-fit: cover; border-radius: var(--radius);" alt="Source">
                    <div style="flex: 1;">
                        <div style="font-size: 16px; font-weight: 500; margin-bottom: 4px;">${isMultilingual ? '多语言源图片' : '源图片'}</div>
                        <div style="font-size: 13px; color: var(--color-secondary);">
                            ${isMultilingual ? `每种语言将生成 ${AppState.currentCroppingSizes.length} 个尺寸` : `将生成 ${AppState.currentCroppingSizes.length} 个不同尺寸`}
                        </div>
                    </div>
                    <button class="btn-secondary" onclick="applyCropToAll()">同步裁剪到所有尺寸</button>
                </div>
            </div>

            <!-- Cropping Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; margin-bottom: 30px;" id="croppingGrid">
                ${renderCroppingCards()}
            </div>

            <!-- Actions -->
            <div style="display: flex; gap: 12px; justify-content: center; padding: 30px; background: var(--color-surface); border-radius: var(--radius); border: 1px solid var(--color-border);">
                <button class="btn-secondary" onclick="backToSizeSelection()">重新选择尺寸</button>
                <button class="btn-primary" style="padding: 12px 40px;" onclick="processAllSizes()">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-right: 8px;">
                        <path d="M10 3V17M10 17L15 12M10 17L5 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    一键处理全部尺寸
                </button>
            </div>
        </div>
    `;
}

function renderCroppingCards() {
    // Determine which sizes to render (from multilingual params or regular state)
    const isMultilingual = AppState.isMultilingualFlow && AppState.currentCroppingLanguage;
    const sizesToRender = isMultilingual
        ? AppState.multilingualCroppingParams[AppState.currentCroppingLanguage]
        : AppState.currentCroppingSizes;

    // Determine preview image source
    const previewImageSrc = isMultilingual && AppState.currentMultilingualPreviews[AppState.currentCroppingLanguage]
        ? AppState.currentMultilingualPreviews[AppState.currentCroppingLanguage]
        : AppState.currentSourceImage;

    return sizesToRender.map((size, index) => {
        const aspectRatio = size.width / size.height;
        return `
            <div class="cropping-card" style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 20px;">
                <!-- Size Header -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <div>
                        <div style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">${size.width} × ${size.height}</div>
                        <div style="font-size: 12px; color: var(--color-secondary);">
                            ${size.transparent ? '透明背景 • ' : ''}
                            ${size.maxSize ? `最大 ${size.maxSize}KB • ` : ''}
                            ${size.formats ? size.formats.join(', ').toUpperCase() : 'PNG'}
                        </div>
                    </div>
                </div>

                <!-- Preview -->
                <div style="position: relative; width: 100%; aspect-ratio: ${aspectRatio}; background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%), linear-gradient(45deg, #f0f0f0 25%, transparent 25%, transparent 75%, #f0f0f0 75%); background-size: 20px 20px; background-position: 0 0, 10px 10px; border-radius: var(--radius); overflow: hidden; margin-bottom: 16px; border: 2px solid var(--color-border);">
                    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <img src="${previewImageSrc}"
                             id="preview-${index}"
                             style="width: auto; height: auto; max-width: none; transform: scale(${size.scale / 100}) translate(${size.offsetX}px, ${size.offsetY}px); transition: transform 0.3s ease;"
                             alt="Preview">
                    </div>
                    <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;">
                        ${size.width}×${size.height}
                    </div>
                    ${isMultilingual ? `
                    <div style="position: absolute; top: 8px; left: 8px; background: rgba(52, 152, 219, 0.9); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;">
                        ${AppState.currentCroppingLanguage}
                    </div>
                    ` : ''}
                </div>

                <!-- Controls -->
                <div style="display: grid; gap: 12px;">
                    <!-- Scale -->
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                            <label style="font-size: 13px; font-weight: 500;">缩放</label>
                            <span style="font-size: 12px; color: var(--color-secondary);" id="scale-value-${index}">${size.scale}%</span>
                        </div>
                        <input type="range"
                               min="50"
                               max="200"
                               value="${size.scale}"
                               style="width: 100%;"
                               oninput="updateCropping(${index}, 'scale', this.value)"
                               class="crop-slider">
                    </div>

                    <!-- Offset X -->
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                            <label style="font-size: 13px; font-weight: 500;">水平偏移</label>
                            <span style="font-size: 12px; color: var(--color-secondary);" id="offsetX-value-${index}">${size.offsetX}px</span>
                        </div>
                        <input type="range"
                               min="-100"
                               max="100"
                               value="${size.offsetX}"
                               style="width: 100%;"
                               oninput="updateCropping(${index}, 'offsetX', this.value)"
                               class="crop-slider">
                    </div>

                    <!-- Offset Y -->
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                            <label style="font-size: 13px; font-weight: 500;">垂直偏移</label>
                            <span style="font-size: 12px; color: var(--color-secondary);" id="offsetY-value-${index}">${size.offsetY}px</span>
                        </div>
                        <input type="range"
                               min="-100"
                               max="100"
                               value="${size.offsetY}"
                               style="width: 100%;"
                               oninput="updateCropping(${index}, 'offsetY', this.value)"
                               class="crop-slider">
                    </div>

                    <!-- Quick Actions -->
                    <div style="display: flex; gap: 8px; margin-top: 8px;">
                        <button class="btn-secondary" style="flex: 1; padding: 8px 12px; font-size: 12px;" onclick="resetCropping(${index})">重置</button>
                        <button class="btn-secondary" style="flex: 1; padding: 8px 12px; font-size: 12px;" onclick="aiAdjustSize(${index})">AI 调整</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function updateCropping(index, property, value) {
    const numValue = parseFloat(value);

    // Update the appropriate state based on multilingual mode
    const isMultilingual = AppState.isMultilingualFlow && AppState.currentCroppingLanguage;
    if (isMultilingual) {
        // Update current language's cropping params
        AppState.multilingualCroppingParams[AppState.currentCroppingLanguage][index][property] = numValue;
    } else {
        // Update regular cropping state
        AppState.currentCroppingSizes[index][property] = numValue;
    }

    // Update preview
    const preview = document.getElementById(`preview-${index}`);
    if (preview) {
        const size = isMultilingual
            ? AppState.multilingualCroppingParams[AppState.currentCroppingLanguage][index]
            : AppState.currentCroppingSizes[index];
        preview.style.transform = `scale(${size.scale / 100}) translate(${size.offsetX}px, ${size.offsetY}px)`;
    }

    // Update value display
    const valueDisplay = document.getElementById(`${property}-value-${index}`);
    if (valueDisplay) {
        if (property === 'scale') {
            valueDisplay.textContent = `${numValue}%`;
        } else {
            valueDisplay.textContent = `${numValue}px`;
        }
    }
}

function switchCroppingLanguage(language) {
    if (AppState.currentCroppingLanguage === language) return;

    AppState.currentCroppingLanguage = language;
    renderCroppingInterface();

    showNotification(`已切换到 ${language} 语言预览`, 'success');
}

function resetCropping(index) {
    const isMultilingual = AppState.isMultilingualFlow && AppState.currentCroppingLanguage;

    if (isMultilingual) {
        // Reset current language's params
        AppState.multilingualCroppingParams[AppState.currentCroppingLanguage][index].scale = 100;
        AppState.multilingualCroppingParams[AppState.currentCroppingLanguage][index].offsetX = 0;
        AppState.multilingualCroppingParams[AppState.currentCroppingLanguage][index].offsetY = 0;
    } else {
        // Reset regular params
        AppState.currentCroppingSizes[index].scale = 100;
        AppState.currentCroppingSizes[index].offsetX = 0;
        AppState.currentCroppingSizes[index].offsetY = 0;
    }

    // Re-render just this card
    renderCroppingInterface();
    showNotification('已重置裁剪参数');
}

function aiAdjustSize(index) {
    const isMultilingual = AppState.isMultilingualFlow && AppState.currentCroppingLanguage;
    const size = isMultilingual
        ? AppState.multilingualCroppingParams[AppState.currentCroppingLanguage][index]
        : AppState.currentCroppingSizes[index];

    // Open prompt selector instead of window.prompt
    openPromptSelector('size-adjustment', (promptText) => {
        showNotification('AI 正在调整...');
        // Simulate AI adjustment
        setTimeout(() => {
            // Random adjustment for demo
            const targetSize = isMultilingual
                ? AppState.multilingualCroppingParams[AppState.currentCroppingLanguage][index]
                : AppState.currentCroppingSizes[index];

            targetSize.scale = 100 + Math.random() * 40 - 20;
            targetSize.offsetX = Math.random() * 40 - 20;
            targetSize.offsetY = Math.random() * 40 - 20;

            renderCroppingInterface();
            showNotification('AI 调整完成！');
            // In real implementation, this would use promptText to guide the adjustment
        }, 1500);
    });
}

function applyCropToAll() {
    const isMultilingual = AppState.isMultilingualFlow && AppState.currentCroppingLanguage;

    if (isMultilingual) {
        const sizes = AppState.multilingualCroppingParams[AppState.currentCroppingLanguage];
        if (sizes.length === 0) return;

        const firstSize = sizes[0];
        const { scale, offsetX, offsetY } = firstSize;

        sizes.forEach((size, index) => {
            if (index > 0) {
                size.scale = scale;
                size.offsetX = offsetX;
                size.offsetY = offsetY;
            }
        });

        renderCroppingInterface();
        showNotification(`已同步第一个尺寸的裁剪参数到 ${AppState.currentCroppingLanguage} 语言的所有尺寸`);
    } else {
        if (AppState.currentCroppingSizes.length === 0) return;

        const firstSize = AppState.currentCroppingSizes[0];
        const { scale, offsetX, offsetY } = firstSize;

        AppState.currentCroppingSizes.forEach((size, index) => {
            if (index > 0) {
                size.scale = scale;
                size.offsetX = offsetX;
                size.offsetY = offsetY;
            }
        });

        renderCroppingInterface();
        showNotification('已同步第一个尺寸的裁剪参数到所有尺寸');
    }
}

function backToSizeSelection() {
    // Re-render multi-size tool
    const canvas = document.getElementById('toolCanvas');
    const settings = document.getElementById('settingsPanel');
    renderMultiSizeTool(canvas, settings);
}

function processAllSizes() {
    showNotification('正在处理全部尺寸...');

    // Simulate processing
    const jobQueue = document.getElementById('jobQueue');
    if (jobQueue) {
        jobQueue.style.display = 'block';
    }

    // Show processing UI
    setTimeout(() => {
        renderProcessingResults();
    }, 2000);
}

function renderProcessingResults() {
    const canvas = document.getElementById('toolCanvas');

    // Check if multilingual mode
    const isMultilingual = AppState.isMultilingualFlow && AppState.currentMultilingualLanguages.length > 0;

    // Calculate total images
    let totalImages = 0;
    let resultCards = [];

    if (isMultilingual) {
        // Generate language × size combinations
        AppState.currentMultilingualLanguages.forEach(lang => {
            const sizes = AppState.multilingualCroppingParams[lang];
            sizes.forEach((size, sizeIndex) => {
                totalImages++;
                const previewImage = AppState.currentMultilingualPreviews[lang] || AppState.currentSourceImage;

                const languageColors = {
                    'EN': '#3498db',
                    'AR': '#2ecc71',
                    'FR': '#e74c3c',
                    'ZH': '#f39c12',
                    'ES': '#9b59b6'
                };
                const langColor = languageColors[lang] || '#6b6b6b';

                resultCards.push(`
                    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 16px;">
                        <div style="width: 100%; aspect-ratio: ${size.width / size.height}; background: linear-gradient(135deg, #f5f5f0 0%, #e5e5e0 100%); border-radius: var(--radius); margin-bottom: 12px; position: relative; overflow: hidden;">
                            <img src="${previewImage}" style="width: 100%; height: 100%; object-fit: cover;" alt="${lang} ${size.width}×${size.height}">
                            <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;">
                                ${size.width}×${size.height}
                            </div>
                            <div style="position: absolute; top: 8px; left: 8px; background: ${langColor}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;">
                                ${lang}
                            </div>
                        </div>
                        <div style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">${size.width} × ${size.height}</div>
                        <div style="font-size: 12px; color: var(--color-secondary); margin-bottom: 8px;">
                            ${lang}: ${AppState.currentMultilingualTexts[lang]}
                        </div>
                        <div style="font-size: 12px; color: var(--color-secondary); margin-bottom: 12px;">
                            ${size.formats ? size.formats[0].toUpperCase() : 'PNG'} • ${size.maxSize ? `${size.maxSize}KB` : '自动'}
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <button class="btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 12px;" onclick="showNotification('下载中...')">下载</button>
                            <button class="btn-secondary" style="padding: 6px 8px; font-size: 12px;" onclick="copyToClipboard('cdn://result/${lang}_${size.width}x${size.height}.png')">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M2 10V3C2 2.44772 2.44772 2 3 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                `);
            });
        });
    } else {
        // Regular single language mode
        totalImages = AppState.currentCroppingSizes.length;
        resultCards = AppState.currentCroppingSizes.map((size, index) => `
            <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius); padding: 16px;">
                <div style="width: 100%; aspect-ratio: ${size.width / size.height}; background: linear-gradient(135deg, #f5f5f0 0%, #e5e5e0 100%); border-radius: var(--radius); margin-bottom: 12px; position: relative; overflow: hidden;">
                    <img src="${AppState.currentSourceImage}" style="width: 100%; height: 100%; object-fit: cover;" alt="${size.width}×${size.height}">
                    <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500;">
                        ${size.width}×${size.height}
                    </div>
                </div>
                <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">${size.width} × ${size.height}</div>
                <div style="font-size: 12px; color: var(--color-secondary); margin-bottom: 12px;">
                    ${size.formats ? size.formats[0].toUpperCase() : 'PNG'} • ${size.maxSize ? `${size.maxSize}KB` : '自动'}
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn-secondary" style="flex: 1; padding: 6px 12px; font-size: 12px;" onclick="showNotification('下载中...')">下载</button>
                    <button class="btn-secondary" style="padding: 6px 8px; font-size: 12px;" onclick="copyToClipboard('cdn://result/${size.width}x${size.height}.png')">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M2 10V3C2 2.44772 2.44772 2 3 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `);
    }

    canvas.innerHTML = `
        <div style="width: 100%; max-width: 1000px;">
            <div style="text-align: center; margin-bottom: 40px;">
                <div style="width: 64px; height: 64px; background: #2ecc71; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M8 16L14 22L24 10" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h3 style="font-size: 28px; font-weight: 500; margin-bottom: 12px;">处理完成！</h3>
                <p style="font-size: 16px; color: var(--color-secondary);">
                    ${isMultilingual
                        ? `已成功生成 ${AppState.currentMultilingualLanguages.length} 种语言 × ${AppState.multilingualCroppingParams[AppState.currentMultilingualLanguages[0]].length} 个尺寸，共 ${totalImages} 张图片`
                        : `已成功生成 ${totalImages} 个尺寸的图片`
                    }
                </p>
            </div>

            <!-- Results Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; margin-bottom: 30px;">
                ${resultCards.join('')}
            </div>

            <!-- Actions -->
            <div style="background: var(--color-surface); border-radius: var(--radius); padding: 30px; border: 1px solid var(--color-border); text-align: center;">
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn-secondary" onclick="renderCroppingInterface()">← 返回裁剪调整</button>
                    <button class="btn-secondary" onclick="showNotification('打包下载中...')">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-right: 6px;">
                            <path d="M8 2V10M8 10L11 7M8 10L5 7M2 14H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        打包下载全部
                    </button>
                    <button class="btn-primary" onclick="uploadToLibrary()">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-right: 6px;">
                            <path d="M8 12V4M8 4L5 7M8 4L11 7M3 14H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        上传到素材库
                    </button>
                </div>
            </div>
        </div>
    `;
}

function uploadToLibrary() {
    showNotification('正在上传到素材库...');

    setTimeout(() => {
        showNotification('上传成功！');
        // Navigate to library
        switchPage('libraryPage');
        renderAssetLibrary();
        document.querySelector('.nav-item[data-page="library"]').click();
    }, 1500);
}

function managePresets() {
    switchPage('settingsPage');
    renderSettingsPage();
    document.querySelector('.nav-item[data-page="settings"]').click();
}

function editPreset(presetId) {
    const preset = AppState.sizePresets.find(p => p.id === presetId);
    if (!preset) {
        showNotification('预设不存在');
        return;
    }

    // Set editing state
    AppState.editingPresetId = presetId;
    AppState.editingPresetSizes = JSON.parse(JSON.stringify(preset.sizes)); // Deep copy

    // Open modal and populate fields
    document.getElementById('presetEditorTitle').textContent = '编辑预设组合';
    document.getElementById('presetName').value = preset.name;
    renderPresetSizesList();

    // Show modal
    document.getElementById('presetEditorModal').classList.add('open');
}

function deletePreset(presetId) {
    if (confirm('确定要删除这个预设组合吗？')) {
        const index = AppState.sizePresets.findIndex(p => p.id === presetId);
        if (index > -1) {
            AppState.sizePresets.splice(index, 1);
            renderSettingsPage();
            showNotification('预设已删除');
        }
    }
}

function createNewPreset() {
    // Reset editing state
    AppState.editingPresetId = null;
    AppState.editingPresetSizes = [];

    // Open modal with empty fields
    document.getElementById('presetEditorTitle').textContent = '新建预设组合';
    document.getElementById('presetName').value = '';
    renderPresetSizesList();

    // Show modal
    document.getElementById('presetEditorModal').classList.add('open');
}

function closePresetEditor() {
    document.getElementById('presetEditorModal').classList.remove('open');

    // Clear form
    document.getElementById('presetName').value = '';
    document.getElementById('newSizeWidth').value = '';
    document.getElementById('newSizeHeight').value = '';
    document.getElementById('newSizeMaxSize').value = '';
    AppState.editingPresetId = null;
    AppState.editingPresetSizes = [];
}

function renderPresetSizesList() {
    const container = document.getElementById('presetSizesList');

    if (AppState.editingPresetSizes.length === 0) {
        container.innerHTML = `
            <div style="padding: 20px; text-align: center; color: var(--color-secondary); font-size: 14px; border: 1px dashed var(--color-border); border-radius: var(--radius);">
                暂无尺寸，请添加至少一个尺寸
            </div>
        `;
        return;
    }

    container.innerHTML = AppState.editingPresetSizes.map((size, index) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: white; border: 1px solid var(--color-border); border-radius: var(--radius);">
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <span style="font-size: 14px; font-family: monospace; font-weight: 500;">
                    ${size.width} × ${size.height} px
                </span>
                ${size.maxSize ? `
                    <span style="font-size: 12px; color: var(--color-secondary); display: flex; align-items: center; gap: 4px;">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1V11M3 8L6 11L9 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        最大 ${size.maxSize} KB
                    </span>
                ` : `
                    <span style="font-size: 12px; color: var(--color-secondary);">无大小限制</span>
                `}
            </div>
            <button class="btn-secondary" onclick="removeSizeFromPreset(${index})" style="padding: 6px 12px; font-size: 13px; color: #e74c3c; border-color: #e74c3c;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="margin-right: 4px;">
                    <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                删除
            </button>
        </div>
    `).join('');
}

function addSizeToPreset() {
    const widthInput = document.getElementById('newSizeWidth');
    const heightInput = document.getElementById('newSizeHeight');
    const maxSizeInput = document.getElementById('newSizeMaxSize');

    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    const maxSize = maxSizeInput.value ? parseInt(maxSizeInput.value) : null;

    // Validation
    if (!width || !height || width <= 0 || height <= 0) {
        showNotification('请输入有效的宽度和高度', 'error');
        return;
    }

    if (maxSize !== null && maxSize <= 0) {
        showNotification('文件大小限制必须大于 0', 'error');
        return;
    }

    // Check for duplicates
    const duplicate = AppState.editingPresetSizes.find(s => s.width === width && s.height === height);
    if (duplicate) {
        showNotification('该尺寸已存在', 'error');
        return;
    }

    // Add size with all properties
    AppState.editingPresetSizes.push({
        width,
        height,
        maxSize,
        transparent: false,
        formats: ['png', 'jpg']
    });

    // Clear inputs
    widthInput.value = '';
    heightInput.value = '';
    maxSizeInput.value = '';

    // Re-render list
    renderPresetSizesList();

    const sizeInfo = maxSize ? `${width}×${height} (最大 ${maxSize} KB)` : `${width}×${height}`;
    showNotification(`已添加尺寸 ${sizeInfo}`, 'success');
}

function removeSizeFromPreset(index) {
    if (index >= 0 && index < AppState.editingPresetSizes.length) {
        const size = AppState.editingPresetSizes[index];
        AppState.editingPresetSizes.splice(index, 1);
        renderPresetSizesList();
        showNotification(`已删除尺寸 ${size.width}×${size.height}`, 'success');
    }
}

function savePreset() {
    const name = document.getElementById('presetName').value.trim();

    // Validation
    if (!name) {
        showNotification('请输入预设名称', 'error');
        return;
    }

    if (AppState.editingPresetSizes.length === 0) {
        showNotification('请至少添加一个尺寸', 'error');
        return;
    }

    if (AppState.editingPresetId) {
        // Edit existing preset
        const preset = AppState.sizePresets.find(p => p.id === AppState.editingPresetId);
        if (preset) {
            preset.name = name;
            preset.sizes = JSON.parse(JSON.stringify(AppState.editingPresetSizes));
            showNotification('预设已更新', 'success');
        }
    } else {
        // Create new preset
        const newPreset = {
            id: 'preset-' + Date.now(),
            name: name,
            sizes: JSON.parse(JSON.stringify(AppState.editingPresetSizes))
        };
        AppState.sizePresets.push(newPreset);
        showNotification('预设已创建', 'success');
    }

    // Close modal and refresh settings page
    closePresetEditor();
    renderSettingsPage();
}

// ============================================================
// Project Management Functions
// ============================================================

function createNewProject() {
    // Reset editing state
    AppState.editingProjectId = null;

    // Open modal with empty fields
    document.getElementById('projectEditorTitle').textContent = '新建 Project';
    document.getElementById('projectName').value = '';
    document.getElementById('projectDescription').value = '';

    // Show modal
    document.getElementById('projectEditorModal').classList.add('open');
}

function editProject(projectId) {
    const project = AppState.projects.find(p => p.id === projectId);
    if (!project) {
        showNotification('Project 不存在', 'error');
        return;
    }

    // Set editing state
    AppState.editingProjectId = projectId;

    // Open modal and populate fields
    document.getElementById('projectEditorTitle').textContent = '编辑 Project';
    document.getElementById('projectName').value = project.name;
    document.getElementById('projectDescription').value = project.description;

    // Show modal
    document.getElementById('projectEditorModal').classList.add('open');
}

function saveProject() {
    const name = document.getElementById('projectName').value.trim();
    const description = document.getElementById('projectDescription').value.trim();

    // Validation
    if (!name) {
        showNotification('请输入 Project 名称', 'error');
        return;
    }

    if (AppState.editingProjectId) {
        // Edit existing project
        const project = AppState.projects.find(p => p.id === AppState.editingProjectId);
        if (project) {
            project.name = name;
            project.description = description;
            showNotification('Project 已更新', 'success');
        }
    } else {
        // Create new project
        const newProject = {
            id: 'project-' + Date.now(),
            name: name,
            description: description,
            createdAt: new Date().toISOString().split('T')[0]
        };
        AppState.projects.push(newProject);
        showNotification('Project 已创建', 'success');
    }

    // Close modal and refresh settings page
    closeProjectEditor();
    renderSettingsPage();
}

function deleteProject(projectId) {
    // Check if project has assets
    const assetsCount = AppState.assets.filter(a => a.projectId === projectId).length;

    let message = '确定要删除这个 Project 吗？';
    if (assetsCount > 0) {
        message = `这个 Project 包含 ${assetsCount} 个素材。删除后，这些素材将不再属于任何 Project。确定要删除吗？`;
    }

    if (confirm(message)) {
        const index = AppState.projects.findIndex(p => p.id === projectId);
        if (index > -1) {
            // Remove project
            AppState.projects.splice(index, 1);

            // Clear projectId from assets
            AppState.assets.forEach(asset => {
                if (asset.projectId === projectId) {
                    asset.projectId = null;
                }
            });

            // Clear filter if current filter is the deleted project
            if (AppState.filters.project === projectId) {
                AppState.filters.project = null;
            }

            renderSettingsPage();
            showNotification('Project 已删除');
        }
    }
}

function closeProjectEditor() {
    document.getElementById('projectEditorModal').classList.remove('open');

    // Clear form
    document.getElementById('projectName').value = '';
    document.getElementById('projectDescription').value = '';
    AppState.editingProjectId = null;
}

// ============================================================
// Prompt Library Management Functions
// ============================================================

function getCategoryLabel(categoryKey) {
    const labels = {
        'multilingual-layout': '多语言排版优化',
        'size-adjustment': '尺寸裁剪调整',
        'translation': 'AI 翻译'
    };
    return labels[categoryKey] || categoryKey;
}

function addPresetPrompt(category) {
    AppState.editingPromptCategory = category;
    AppState.editingPromptId = null;

    document.getElementById('promptEditorTitle').textContent = '添加预设提示词';
    document.getElementById('promptCategoryDisplay').textContent = getCategoryLabel(category);
    document.getElementById('promptText').value = '';
    document.getElementById('promptEditorModal').classList.add('open');
}

function editPresetPrompt(category, promptId) {
    const prompt = AppState.presetPrompts[category]?.find(p => p.id === promptId);
    if (!prompt) {
        showNotification('提示词不存在', 'error');
        return;
    }

    AppState.editingPromptCategory = category;
    AppState.editingPromptId = promptId;

    document.getElementById('promptEditorTitle').textContent = '编辑预设提示词';
    document.getElementById('promptCategoryDisplay').textContent = getCategoryLabel(category);
    document.getElementById('promptText').value = prompt.text;
    document.getElementById('promptEditorModal').classList.add('open');
}

function savePrompt() {
    const text = document.getElementById('promptText').value.trim();
    const category = AppState.editingPromptCategory;

    if (!text) {
        showNotification('请输入提示词内容', 'error');
        return;
    }

    if (!category) {
        showNotification('分类信息丢失', 'error');
        return;
    }

    if (AppState.editingPromptId) {
        // Update existing preset prompt
        const prompt = AppState.presetPrompts[category]?.find(p => p.id === AppState.editingPromptId);
        if (prompt) {
            prompt.text = text;
            showNotification('提示词已更新');
        } else {
            showNotification('提示词不存在', 'error');
            return;
        }
    } else {
        // Create new preset prompt
        const newPrompt = {
            id: category.substring(0, 2) + '-preset-' + Date.now(),
            text: text,
            category: category
        };

        if (!AppState.presetPrompts[category]) {
            AppState.presetPrompts[category] = [];
        }
        AppState.presetPrompts[category].push(newPrompt);
        showNotification('预设提示词已添加');
    }

    closePromptEditor();
    renderSettingsPage();
}

function deletePresetPrompt(category, promptId) {
    if (!confirm('确定要删除这个预设提示词吗？')) {
        return;
    }

    const index = AppState.presetPrompts[category]?.findIndex(p => p.id === promptId);
    if (index !== undefined && index !== -1) {
        AppState.presetPrompts[category].splice(index, 1);
        showNotification('预设提示词已删除');
        renderSettingsPage();
    } else {
        showNotification('提示词不存在', 'error');
    }
}

function toggleFavoritePrompt(promptId) {
    const index = AppState.favoritePromptIds.indexOf(promptId);
    if (index > -1) {
        // Remove from favorites
        AppState.favoritePromptIds.splice(index, 1);
        showNotification('已取消常用标记');
    } else {
        // Add to favorites
        AppState.favoritePromptIds.push(promptId);
        showNotification('已标记为常用提示词');
    }
    renderSettingsPage();
}

function deleteUserPrompt(promptId) {
    if (!confirm('确定要删除这个提示词吗？')) {
        return;
    }

    const index = AppState.userPrompts.findIndex(p => p.id === promptId);
    if (index !== -1) {
        AppState.userPrompts.splice(index, 1);

        // Also remove from favorites if present
        const favIndex = AppState.favoritePromptIds.indexOf(promptId);
        if (favIndex > -1) {
            AppState.favoritePromptIds.splice(favIndex, 1);
        }

        showNotification('提示词已删除');
        renderSettingsPage();
    } else {
        showNotification('提示词不存在', 'error');
    }
}

function closePromptEditor() {
    document.getElementById('promptEditorModal').classList.remove('open');

    // Clear form
    document.getElementById('promptText').value = '';
    AppState.editingPromptCategory = null;
    AppState.editingPromptId = null;
}

/**
 * Record a user-written prompt automatically
 * @param {string} text - The prompt text
 * @param {string} category - The category ('multilingual-layout', 'size-adjustment', 'translation')
 */
function recordUserPrompt(text, category) {
    if (!text || !text.trim()) return;

    text = text.trim();

    // Check if this prompt already exists in user prompts
    const existingPrompt = AppState.userPrompts.find(p => p.text === text && p.category === category);

    if (existingPrompt) {
        // Update usage count and last used time
        existingPrompt.usageCount++;
        existingPrompt.lastUsedAt = new Date().toISOString();
    } else {
        // Create new user prompt
        const newPrompt = {
            id: 'user-prompt-' + Date.now(),
            text: text,
            category: category,
            usageCount: 1,
            createdAt: new Date().toISOString(),
            lastUsedAt: new Date().toISOString()
        };
        AppState.userPrompts.push(newPrompt);
    }
}

// ============================================================
// Prompt Selector Functions
// ============================================================

/**
 * Open prompt selector modal
 * @param {string} category - The category of prompts to show
 * @param {function} callback - Callback function to receive selected prompt text
 */
function openPromptSelector(category, callback) {
    AppState.promptSelectorCategory = category;
    AppState.promptSelectorCallback = callback;

    // Set title
    document.getElementById('promptSelectorTitle').textContent = getCategoryLabel(category);

    // Clear custom input
    document.getElementById('customPromptInput').value = '';

    // Populate preset prompts
    const presetPrompts = AppState.presetPrompts[category] || [];
    const presetPromptsList = document.getElementById('presetPromptsList');

    if (presetPrompts.length > 0) {
        presetPromptsList.innerHTML = presetPrompts.map(prompt => `
            <div class="prompt-option" onclick="selectPromptFromList('${prompt.id}', 'preset')" style="padding: 12px 16px; background: var(--color-hover); border: 1px solid transparent; border-radius: var(--radius); cursor: pointer; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='transparent'">
                <div style="font-size: 13px; color: var(--color-primary);">${prompt.text}</div>
            </div>
        `).join('');
    } else {
        presetPromptsList.innerHTML = `
            <div style="padding: 16px; background: var(--color-hover); border-radius: var(--radius); text-align: center; font-size: 13px; color: var(--color-secondary);">
                暂无预设提示词
            </div>
        `;
    }

    // Populate favorite prompts
    const favoritePrompts = AppState.userPrompts.filter(p =>
        p.category === category && AppState.favoritePromptIds.includes(p.id)
    );
    const favoritePromptsSection = document.getElementById('favoritePromptsSection');
    const favoritePromptsList = document.getElementById('favoritePromptsList');

    if (favoritePrompts.length > 0) {
        favoritePromptsSection.style.display = 'block';
        favoritePromptsList.innerHTML = favoritePrompts.map(prompt => `
            <div class="prompt-option" onclick="selectPromptFromList('${prompt.id}', 'user')" style="padding: 12px 16px; background: white; border: 1px solid var(--color-border); border-radius: var(--radius); cursor: pointer; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 14px;">⭐</span>
                    <span style="flex: 1; font-size: 13px; color: var(--color-primary);">${prompt.text}</span>
                    <span style="font-size: 11px; color: var(--color-secondary); padding: 2px 6px; background: var(--color-hover); border-radius: 4px;">${prompt.usageCount} 次</span>
                </div>
            </div>
        `).join('');
    } else {
        favoritePromptsSection.style.display = 'none';
    }

    // Populate recent user prompts (excluding favorites, sorted by last used)
    const recentPrompts = AppState.userPrompts
        .filter(p => p.category === category && !AppState.favoritePromptIds.includes(p.id))
        .sort((a, b) => new Date(b.lastUsedAt) - new Date(a.lastUsedAt))
        .slice(0, 5); // Show top 5 recent prompts

    const recentPromptsSection = document.getElementById('recentPromptsSection');
    const recentPromptsList = document.getElementById('recentPromptsList');

    if (recentPrompts.length > 0) {
        recentPromptsSection.style.display = 'block';
        recentPromptsList.innerHTML = recentPrompts.map(prompt => `
            <div class="prompt-option" onclick="selectPromptFromList('${prompt.id}', 'user')" style="padding: 12px 16px; background: white; border: 1px solid var(--color-border); border-radius: var(--radius); cursor: pointer; transition: var(--transition);" onmouseover="this.style.borderColor='var(--color-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="flex: 1; font-size: 13px; color: var(--color-primary);">${prompt.text}</span>
                    <span style="font-size: 11px; color: var(--color-secondary); padding: 2px 6px; background: var(--color-hover); border-radius: 4px;">${prompt.usageCount} 次</span>
                </div>
            </div>
        `).join('');
    } else {
        recentPromptsSection.style.display = 'none';
    }

    // Open modal
    document.getElementById('promptSelectorModal').classList.add('open');
}

/**
 * Select a prompt from the preset or user prompt list
 */
function selectPromptFromList(promptId, type) {
    let promptText = '';

    if (type === 'preset') {
        const category = AppState.promptSelectorCategory;
        const prompt = AppState.presetPrompts[category]?.find(p => p.id === promptId);
        if (prompt) {
            promptText = prompt.text;
        }
    } else if (type === 'user') {
        const prompt = AppState.userPrompts.find(p => p.id === promptId);
        if (prompt) {
            promptText = prompt.text;
        }
    }

    if (promptText) {
        document.getElementById('customPromptInput').value = promptText;
    }
}

/**
 * Confirm prompt selection and execute callback
 */
function confirmPromptSelection() {
    const promptText = document.getElementById('customPromptInput').value.trim();

    if (!promptText) {
        showNotification('请输入或选择提示词', 'error');
        return;
    }

    const callback = AppState.promptSelectorCallback;
    const category = AppState.promptSelectorCategory;

    if (callback && typeof callback === 'function') {
        // Record the prompt
        recordUserPrompt(promptText, category);

        // Execute callback with the prompt text
        callback(promptText);
    }

    closePromptSelector();
}

/**
 * Close prompt selector modal
 */
function closePromptSelector() {
    document.getElementById('promptSelectorModal').classList.remove('open');
    document.getElementById('customPromptInput').value = '';
    AppState.promptSelectorCategory = null;
    AppState.promptSelectorCallback = null;
}

function viewJobResult(jobId) {
    const job = AppState.jobs.find(j => j.id === jobId);
    if (job && job.assetId) {
        showAssetDetail(job.assetId);
    } else {
        showNotification('查看任务结果...');
    }
}

// ============================================================
// Initialize App
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active nav
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Switch page
            const page = item.dataset.page;
            AppState.currentPage = page;

            if (page === 'library') {
                switchPage('libraryPage');
                renderAssetLibrary();
            } else if (page === 'create') {
                switchPage('createPage');
                renderAICreatePage();
            } else if (page === 'workspace') {
                switchPage('workspacePage');
                renderWorkspacePage();
            } else if (page === 'settings') {
                switchPage('settingsPage');
                renderSettingsPage();
            }
        });
    });

    // Filter drawer
    const filterBtn = document.getElementById('filterBtn');
    const filterDrawer = document.getElementById('filterDrawer');
    const closeFilter = document.getElementById('closeFilter');

    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            filterDrawer.classList.add('open');
        });
    }

    if (closeFilter) {
        closeFilter.addEventListener('click', () => {
            filterDrawer.classList.remove('open');
        });
    }

    // Filter drawer - apply filters
    const applyFiltersBtn = filterDrawer.querySelector('.btn-primary');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            // Collect filter values
            const tagInput = filterDrawer.querySelector('input[placeholder="搜索标签..."]');
            const creatorInput = filterDrawer.querySelector('input[placeholder="输入创作人..."]');
            const languageCheckboxes = filterDrawer.querySelectorAll('.checkbox-group input[type="checkbox"][value]');
            const otherCheckboxes = filterDrawer.querySelectorAll('.checkbox-group:last-child input[type="checkbox"]');

            // Update filter state
            if (tagInput && tagInput.value) {
                AppState.filters.tags = tagInput.value.split(',').map(t => t.trim()).filter(t => t);
            } else {
                AppState.filters.tags = [];
            }

            AppState.filters.creator = creatorInput ? creatorInput.value : '';

            AppState.filters.languages = [];
            languageCheckboxes.forEach(cb => {
                if (cb.checked) {
                    AppState.filters.languages.push(cb.value.toUpperCase());
                }
            });

            // Check "no-language" option
            const noLangCheckbox = Array.from(languageCheckboxes).find(cb => cb.value === 'no-lang');
            AppState.filters.noLanguageOnly = noLangCheckbox ? noLangCheckbox.checked : false;

            // Other filters
            if (otherCheckboxes[0]) AppState.filters.transparent = otherCheckboxes[0].checked ? true : null;
            if (otherCheckboxes[1]) AppState.filters.liked = otherCheckboxes[1].checked;
            if (otherCheckboxes[2]) AppState.filters.myCreations = otherCheckboxes[2].checked;

            // Close drawer and re-render
            filterDrawer.classList.remove('open');
            renderAssetLibrary();
            showNotification('筛选已应用');
        });
    }

    // Filter drawer - reset
    const resetFiltersBtn = filterDrawer.querySelector('.btn-secondary');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            AppState.filters = {
                tags: [],
                creator: '',
                requester: '',
                languages: [],
                languageMode: 'any',
                noLanguageOnly: false,
                transparent: null,
                liked: false,
                myCreations: false,
                timeRange: null
            };

            // Clear inputs
            filterDrawer.querySelectorAll('input').forEach(input => {
                if (input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });

            renderAssetLibrary();
            showNotification('筛选已重置');
        });
    }

    // View switcher
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            AppState.currentView = btn.dataset.view;

            const grid = document.getElementById('assetsGrid');
            if (AppState.currentView === 'masonry') {
                grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(240px, 1fr))';
            } else {
                grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
            }
        });
    });

    // Global search
    const globalSearch = document.getElementById('globalSearch');
    if (globalSearch) {
        globalSearch.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query) {
                AppState.filters.tags = [query];
                renderAssetLibrary();
            } else {
                AppState.filters.tags = [];
                renderAssetLibrary();
            }
        });
    }

    // Sort selector
    document.querySelectorAll('.sort-select').forEach(select => {
        select.addEventListener('change', (e) => {
            AppState.currentSort = e.target.value;
            // In a real app, this would re-sort the assets
            renderAssetLibrary();
        });
    });

    // Initial render
    renderAssetLibrary();

    console.log('Creative AI Studio initialized');
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .tool-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 16px;
        background: none;
        border: none;
        border-radius: var(--radius);
        cursor: pointer;
        transition: var(--transition);
        color: var(--color-secondary);
        font-size: 14px;
        text-align: left;
    }

    .tool-btn:hover {
        background: var(--color-hover);
        color: var(--color-primary);
    }

    .tool-btn.active {
        background: var(--color-primary);
        color: white;
    }

    .tool-btn svg {
        flex-shrink: 0;
    }
`;
document.head.appendChild(style);
