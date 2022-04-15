import chai from "chai";
import puppeteer from "puppeteer"

const should = chai.should()

let browser
let page

before(async ()=>{
    browser = await puppeteer.launch({headless: true})

})

beforeEach(async ()=>{
    page = await browser.newPage()
    await page.goto('http://localhost:5500/static/html/index.html', {waitUntil: 'networkidle0'})
})

describe('Tests front end', ()=>{
    it('Cifrador input', async()=>{
        
        const input = await page.$(".container__input")
        await input.type('miguel a traido pan con leche', {delay: 50})
        await (await page.$('#cifrar')).click()
        const response = await page.$('.container__text')
        const text = await response.evaluate(e=>e.textContent)
        text.should.equal('mimesgufatenterl ai traiimesdober pain cobern lenterchenter')
    })

    it('Descifrador input', async()=>{

        const input = await page.$(".container__input")
        await input.type('mimesgufatenterl ai traiimesdober pain cobern lenterchenter', {delay: 50})
        await (await page.$('#descifrar')).click()
        const response = await page.$('.container__text')
        const text = await response.evaluate(e=>e.textContent)
        text.should.equal('miguel a traido pan con leche')
    })

    /* it('Boton copiar', async () =>{

        const input = await page.$("container__input")
        await input.type('miguel a traido pan con leche')
        await (await page.$('#descifrar')).click()
        const response = await page.$('container__text')
        const text = await response.evaluate(e=>e.textContent)
        text.should.equal('mimesgufatenterl ai traiimesdober pain cobern lenterchenter')
    })
 */
})

after(async ()=>{
    browser.close()
})