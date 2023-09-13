function possui_autorizacao(chave_acesso) {
    return process.env.CHAVE_ACESSO !== undefined && process.env.CHAVE_ACESSO && process.env.CHAVE_ACESSO === chave_acesso;
}

module.exports.possui_autorizacao = possui_autorizacao;
