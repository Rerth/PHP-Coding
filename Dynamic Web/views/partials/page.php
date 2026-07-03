<main>
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-slate-200/60 bg-white/90 p-8 shadow-sm shadow-slate-900/5">
            <h2 class="text-2xl font-semibold text-slate-900 mb-4"><?= $sectionHeading ?></h2>
            <p class="text-slate-700 leading-relaxed"><?= $sectionText ?></p>
            <?php if (!empty($sectionList) && is_array($sectionList)): ?>
                <ul class="mt-6 space-y-3 list-disc list-inside text-slate-700">
                    <?php foreach ($sectionList as $item): ?>
                        <li><?= htmlspecialchars($item) ?></li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>
    </div>
</main>
