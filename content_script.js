walk(document.body);

function walk(node)
{var child, next;

    switch (node.nodeType)
    {
        case 1: //Element
        case 9: //Document
        case 11: // Document fragement
            child = node.firstChild;
            while (child)
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
        default:
            break;
    }
}

function handleText(textNode)
{
    var text = textNode.nodeValue;

    text = text.replace(/TRUMP/g, 'DRUMPF');
    text = text.replace(/Trump/g, 'Drumpf');
    text = text.replace(/trump/g, 'drumpf');
    text = text.replace(/Make America Great Again/g, 'Make America Drumpf Again');
    text = text.replace(/make America great again/g, 'make America Drumpf again');
    text = text.replace(/MakeAmericaGreatAgain/g, 'MakeAmericaDrumpfAgain');

    textNode.nodeValue = text;
}