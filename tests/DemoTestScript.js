'Openrunner-Script: v1';
const expect = await include('expect');
const tabs = await include('tabs');
await include('contentEvents');
await include('httpEvents');
await include('wait');
await include('eventSimulation');
const tab = await tabs.create();


await transaction('HomePage', async t => {
    t.title = '00 HomePage';
    await tab.navigate('http://localhost:7888/', {timeout: '10s'});
    await tab.wait(async () => {
        const button = await wait.documentComplete().selector('#pageintro > article > button').isDisplayed();
        await button.click();
        await wait.delay('3s');
    });
});


await transaction('Gallery', async t => {
    t.title = '01 Gallery';
    await tab.wait(async () => {
        const Gallery = await wait.documentComplete().selector('#mainav > ul > li:nth-child(2) > ul > li:nth-child(1) > a').isDisplayed();
        await Gallery.click();
    });
});

await transaction('Chillem', async t => {
    t.title = 'Chillem';
    await tab.wait(async () => {
        await wait.delay('3s');
    });
});

await transaction('Back to home', async t => {
    t.title = '02 HomePage';
    await tab.wait(async () => {
        const Nalpure = await wait.documentComplete().selector('#logo > a').isDisplayed();
        await Nalpure.click();
    });
});

await transaction('Chillem2', async t => {
    t.title = 'Chillem2';
    await tab.wait(async () => {
        await wait.delay('3s');
    });
});

