<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method= "text" indent="yes"/>
    <xsl:template match="/opleiding">
            <xsl:text>Overzicht deelnemers van opleiding </xsl:text><xsl:value-of select="titel"></xsl:value-of>
            <xsl:text>&#xa;</xsl:text>
            <xsl:for-each select="deelnemers/deelnemer">
                   <xsl:value-of select="."></xsl:value-of>
                    <xsl:text>&#xa;</xsl:text>
            </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>