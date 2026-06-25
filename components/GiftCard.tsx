import { useState } from 'react';

function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }
  return (
    <button
      className={`bank-copy-btn${copied ? ' bank-copy-btn--copied' : ''}`}
      onClick={handleCopy}
      aria-label="Copy"
    >
      {copied ? '✓' : '⎘'}
    </button>
  );
}

export default function GiftCard() {
  const [showBankDetails, setShowBankDetails] = useState(false);

  return (
    <div className="card rsvp-card">
      <div className="card-header">
        <div className="card-icon" style={{ background: 'rgba(240,192,96,0.15)' }}>
          🏦
        </div>
        <div>
          <div className="card-title">Gift &amp; Bank Details</div>
          <div className="card-sub">For those who wish to send a gift</div>
        </div>
      </div>
      <div className="card-body" style={{ padding: '14px 18px 20px' }}>
        <p className="bank-note" style={{ marginTop: 0 }}>
          Your presence is already the greatest gift. But if you wish to bless us further, we are
          deeply grateful. 💛
        </p>

        {/* QR row always visible */}
        <div className="bank-qr-always-row">
          <div className="bank-qr-item">
            <div className="bank-qr-box bank-qr-box--img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/bank/revolut.jpg" alt="Revolut QR code" />
            </div>
            <span className="bank-qr-currency">Revolut</span>
            <span className="bank-qr-sub">🇪🇺 EUR</span>
          </div>
          <div className="bank-qr-item">
            <div className="bank-qr-box bank-qr-box--img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/bank/paylah.jpg" alt="Paylah QR code" />
            </div>
            <span className="bank-qr-currency">Paylah / Paynow</span>
            <span className="bank-qr-sub">🇸🇬 SGD</span>
          </div>
          <div className="bank-qr-item">
            <div className="bank-qr-box bank-qr-box--img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/bank/bpi.jpg" alt="BPI QR code" />
            </div>
            <span className="bank-qr-currency">BPI</span>
            <span className="bank-qr-sub">🇵🇭 PHP</span>
          </div>
          <div className="bank-qr-item">
            <div className="bank-qr-box bank-qr-box--img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/bank/bdo.jpg" alt="BDO QR code" />
            </div>
            <span className="bank-qr-currency">BDO</span>
            <span className="bank-qr-sub">🇵🇭 PHP</span>
          </div>
        </div>

        <button className="bank-toggle" onClick={() => setShowBankDetails((v) => !v)}>
          {showBankDetails ? 'Hide bank details ↑' : 'View bank details →'}
        </button>

        {showBankDetails && (
          <div className="bank-details-body">
            {/* EUR */}
            <div className="bank-currency-heading">🇪🇺 EUR · Revolut</div>
            <div className="bank-section">
              <div className="bank-rows">
                <div className="bank-row">
                  <span className="bank-key">Bank</span>
                  <span className="bank-val">Revolut</span>
                </div>
                <div className="bank-row">
                  <span className="bank-key">Account Name</span>
                  <span className="bank-val">Remiel Evangelio</span>
                </div>
                <div className="bank-row">
                  <span className="bank-key">IBAN</span>
                  <span className="bank-val">DE22 1001 0178 9037 7766 10</span>
                  <CopyBtn value="DE22100101789037776610" />
                </div>
                <div className="bank-row">
                  <span className="bank-key">BIC/SWIFT</span>
                  <span className="bank-val">REVODEB2</span>
                  <CopyBtn value="REVODEB2" />
                </div>
              </div>
            </div>

            <div className="bank-divider"></div>

            {/* SGD */}
            <div className="bank-currency-heading">🇸🇬 SGD · Paylah / Paynow</div>
            <div className="bank-section">
              <div className="bank-rows">
                <div className="bank-row">
                  <span className="bank-key">Bank</span>
                  <span className="bank-val">DBS</span>
                </div>
                <div className="bank-row">
                  <span className="bank-key">Account No.</span>
                  <span className="bank-val">93578013</span>
                  <CopyBtn value="93578013" />
                </div>
              </div>
            </div>

            <div className="bank-divider"></div>

            {/* PHP BPI */}
            <div className="bank-currency-heading">🇵🇭 PHP · BPI</div>
            <div className="bank-section">
              <div className="bank-rows">
                <div className="bank-row">
                  <span className="bank-key">Bank</span>
                  <span className="bank-val">BPI</span>
                </div>
                <div className="bank-row">
                  <span className="bank-key">Account Name</span>
                  <span className="bank-val">Faith Carillo</span>
                </div>
                <div className="bank-row">
                  <span className="bank-key">Account No.</span>
                  <span className="bank-val">0039403803</span>
                  <CopyBtn value="0039403803" />
                </div>
              </div>
            </div>

            <div className="bank-divider"></div>

            {/* PHP BDO */}
            <div className="bank-currency-heading">🇵🇭 PHP · BDO</div>
            <div className="bank-section">
              <div className="bank-rows">
                <div className="bank-row">
                  <span className="bank-key">Bank</span>
                  <span className="bank-val">BDO Unibank</span>
                </div>
                <div className="bank-row">
                  <span className="bank-key">Account Name</span>
                  <span className="bank-val">Faith Carillo</span>
                </div>
                <div className="bank-row">
                  <span className="bank-key">Account No.</span>
                  <span className="bank-val">007800072549</span>
                  <CopyBtn value="007800072549" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
