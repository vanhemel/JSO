<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml"/>

    <xsl:template match="/items">
    <CDoverzicht>
        <xsl:for-each select="item">
            <xsl:sort select="omschrijving"/>
            <CD>
            <xsl:apply-templates select="omschrijving" />
            </CD>
        </xsl:for-each>
    </CDoverzicht>
    </xsl:template>
    <xsl:template match="omschrijving">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
</xsl:stylesheet>