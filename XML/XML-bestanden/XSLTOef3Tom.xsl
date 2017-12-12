<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>


    <xsl:template match="/bookstore">
        <h1>Beschikbare boeken:</h1>
        <table>
            <tr>
                <th>titel</th>
                <th>auteur</th>
                <th>ISBN</th>
                <th>prijs</th>
            </tr>
            <xsl:for-each select="speler">
                <xsl:sort select="naam"/>
                <xsl:if test="aantal-doelpunten&gt;2">
                    <tr>
                        <td>
                            <xsl:apply-templates select="naam" />
                        </td>
                        <td>
                            <xsl:apply-templates select="nummer" />
                        </td>
                        <td>
                            <xsl:apply-templates select="aantal-doelpunten" />
                        </td>
                    </tr>
                </xsl:if>
            </xsl:for-each>
        </table>

    </xsl:stylesheet>