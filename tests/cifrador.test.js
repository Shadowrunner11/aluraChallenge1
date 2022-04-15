import chai from "chai";
import StringCifrable from "../src/StringCifrable.mjs";

const should = chai.should()

const fakeDict ={
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
}

describe('Test de cifrador',()=>{
    it('Test de cifrado', ()=>{
        const stringCifrable = new StringCifrable('miguel')
        stringCifrable.cifrarConDictPorLetra(fakeDict).should.equal('mimesgufatenterl')
    })

    it('Test descifrado', ()=>{
        const stringCifrada  = new StringCifrable('mimesgufatenterl')
        stringCifrada.descifrarConDict(fakeDict).should.equal('miguel')
    })

    it('Test de cifrado2', ()=>{
        const stringCifrable = new StringCifrable('miguel a traido pan con leche')
        stringCifrable.cifrarConDictPorLetra(fakeDict).should.equal('mimesgufatenterl ai traiimesdober pain cobern lenterchenter')
    })

    it('Test de descifrado2', ()=>{
        const stringCifrable = new StringCifrable('mimesgufatenterl ai traiimesdober pain cobern lenterchenter')
        stringCifrable.descifrarConDict(fakeDict).should.equal('miguel a traido pan con leche')
    })
})
