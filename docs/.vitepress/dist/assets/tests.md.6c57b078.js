import{_ as n,c as s,o as a,a as t}from"./app.c9c50e6a.js";const d='{"title":"@obewds/vite-vue-ts-compo-pkg-starter Tests","description":"","frontmatter":{"head":[["link",{"rel":"icon","href":"favicon.ico"}]]},"headers":[{"level":2,"title":"Testing Status","slug":"testing-status"},{"level":2,"title":"Vitest Tests","slug":"vitest-tests"}],"relativePath":"tests.md"}',p={},e=t(`<div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>This is an example GitHub Pages site and is NOT intended for actual use in real projects/products!</p></div><h1 id="obewds-vite-vue-ts-compo-pkg-starter-tests" tabindex="-1">@obewds/vite-vue-ts-compo-pkg-starter Tests <a class="header-anchor" href="#obewds-vite-vue-ts-compo-pkg-starter-tests" aria-hidden="true">#</a></h1><h2 id="testing-status" tabindex="-1">Testing Status <a class="header-anchor" href="#testing-status" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">CURRENT STATUS</p><p><strong>100%</strong> Coverage<br><strong>100%</strong> Passing</p></div><h2 id="vitest-tests" tabindex="-1">Vitest Tests <a class="header-anchor" href="#vitest-tests" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// ./tests/ViteVueTsCompoPkgStarter.test.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>
<span class="token keyword">import</span> ViteVueTsCompoPkgStarter <span class="token keyword">from</span> <span class="token string">&#39;../src/components/ViteVueTsCompoPkgStarter.vue&#39;</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;ViteVueTsCompoPkgStarter.vue component mounts successfully&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>ViteVueTsCompoPkgStarter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeTruthy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;ViteVueTsCompoPkgStarter.vue component text prop accepts a string value&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> testString <span class="token operator">=</span> <span class="token string">&#39;Test String Value&#39;</span>

    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>ViteVueTsCompoPkgStarter<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> testString
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testString<span class="token punctuation">)</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>



<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;ViteVueTsCompoPkgStarter.vue component default slot accepts an element node with a child text node&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> testStrLiteral <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;Test String Value&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>

    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>ViteVueTsCompoPkgStarter<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">slots</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token keyword">default</span><span class="token operator">:</span> testStrLiteral
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>testStrLiteral<span class="token punctuation">)</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,6),o=[e];function c(l,r,u,i,k,b){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{d as __pageData,g as default};
